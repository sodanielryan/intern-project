import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";
import styles from "@/styles/PokemonCard.module.css";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className={styles.card}>
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          width={50}
          height={50}
        />
        <p className={styles.number}>#{String(pokemon.id).padStart(3, "0")}</p>
        <h2 className={styles.name}>{pokemon.name}</h2>
        <div className={styles.types}>
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className={`${styles.type} ${styles[t.type.name]}`}
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;