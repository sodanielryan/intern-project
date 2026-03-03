import { getPokemonDetail } from "@/lib/api";
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import styles from "@/styles/PokemonDetail.module.css";

interface PokemonDetailPageProps {
  params: Promise<{ id: string }>;
}

const PokemonDetailPage = async ({ params }: PokemonDetailPageProps) => {
  const { id } = await params;
  const pokemon: Pokemon = await getPokemonDetail(id);

  return (
    <main className={styles.container}>
      <p className={styles.number}>#{String(pokemon.id).padStart(3, "0")}</p>
      <h1 className={styles.name}>{pokemon.name}</h1>

      <Image
        src={
          pokemon.sprites.other["official-artwork"].front_default ||
          pokemon.sprites.front_default
        }
        alt={pokemon.name}
        width={250}
        height={250}
      />

      <div className={styles.types}>
        {pokemon.types.map((t) => (
          <span key={t.type.name} className={`${styles.type} ${styles[t.type.name]}`}>
            {t.type.name}
          </span>
        ))}
      </div>

      <div className={styles.info}>
        <p>Height: {pokemon.height / 10}m</p>
        <p>Weight: {pokemon.weight / 10}kg</p>
      </div>

      <div className={styles.abilities}>
        <h2>Abilities</h2>
        {pokemon.abilities.map((a) => (
          <span key={a.ability.name} className={styles.ability}>
            {a.ability.name}
          </span>
        ))}
      </div>

      <div className={styles.stats}>
        <h2>Base Stats</h2>
        {pokemon.stats.map((s) => (
          <div key={s.stat.name} className={styles.statRow}>
            <span className={styles.statName}>{s.stat.name}</span>
            <span className={styles.statValue}>{s.base_stat}</span>
            <div className={styles.statBarBg}>
              <div
                className={styles.statBarFill}
                style={{ width: `${(s.base_stat / 255) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PokemonDetailPage;