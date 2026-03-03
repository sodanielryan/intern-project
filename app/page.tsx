"use client";

import { useEffect, useState } from "react";
import { getPokemonDetail, getPokemonList } from "@/lib/api";
import { Pokemon, PokemonListItem } from "@/types/pokemon";
import PokemonCard from "@/components/PokemonCard";
import styles from "@/styles/Home.module.css";

const Home = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = await getPokemonList(100000);
      const details = await Promise.all(
        list.map((p: PokemonListItem) => getPokemonDetail(p.name)),
      );
      setPokemonList(details);
    };
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>PokéDex</h1>
      <div className={styles.grid}>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
};

export default Home;
