"use client";

import { useEffect, useState } from "react";
import { getPokemonDetail, getPokemonList } from "@/lib/api";
import { Pokemon, PokemonListItem } from "@/types/pokemon";
import PokemonCard from "@/components/PokemonCard";
import Search from "@/components/Search";
import styles from "@/styles/Home.module.css";
import Filter from "@/components/Filter";

const Home = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const list = await getPokemonList(200);
      const details = await Promise.all(
        list.map((p: PokemonListItem) => getPokemonDetail(p.name)),
      );
      setPokemonList(details);
    };
    fetchData();
  }, []);

  const types = [
    ...new Set(pokemonList.flatMap((p) => p.types.map((t) => t.type.name))),
  ].sort();

  const filteredPokemon = pokemonList.filter((pokemon) => {
    const matchesSearch = pokemon.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesType =
      selectedType === "" ||
      pokemon.types.some((t) => t.type.name === selectedType);

    return matchesSearch && matchesType;
  });

  return (
    <main className={styles.main}>
      <div className={styles.searchContainer}>
        <Search searchQuery={searchQuery} onSearch={setSearchQuery} />
        <Filter
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          types={types}
        />
      </div>
      <div className={styles.grid}>
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
};

export default Home;
