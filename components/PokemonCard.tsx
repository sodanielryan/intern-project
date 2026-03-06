"use client";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";
import styles from "@/styles/PokemonCard.module.css";
import { useFavorites } from "@/context/FavoriteContext";
import { useTeam } from "@/context/TeamContext";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { addToTeam, removeFromTeam, isInTeam } = useTeam();

  const handleAction = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault();
    action();
  };

  const favoriteActive = isFavorite(pokemon.id);
  const teamActive = isInTeam(pokemon.id);

  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className={styles.card}>
        <Image
  src={pokemon.sprites.other["official-artwork"].front_default}
  alt={pokemon.name}
  width={100}
  height={100}
  className={styles.image}
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
        <div className={styles.addToButtons}>
          <button
            onClick={(e) =>
              handleAction(
                e,
                favoriteActive
                  ? () => removeFavorite(pokemon.id)
                  : () => addFavorite(pokemon),
              )
            }
            className={favoriteActive ? styles.active : ""}
          >
            {favoriteActive ? "❤️" : "🤍"}
          </button>

          <button
            onClick={(e) =>
              handleAction(
                e,
                teamActive
                  ? () => removeFromTeam(pokemon.id)
                  : () => addToTeam(pokemon),
              )
            }
            className={teamActive ? styles.teamActive : ""}
          >
            {teamActive ? "➕" : "✚"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
