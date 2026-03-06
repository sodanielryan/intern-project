"use client";

import { useFavorites } from "@/context/FavoriteContext";
import { useTeam } from "@/context/TeamContext";
import PokemonCard from "@/components/PokemonCard";
import styles from "@/styles/Favorite.module.css";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const { team } = useTeam();

  return (
    <main className={styles.main}>
      <h1>My Team ({team.length}/6)</h1>
      {team.length === 0 ? (
        <p className={styles.empty}>No team members yet.</p>
      ) : (
        <div className={styles.grid}>
          {team.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}

      <h1 style={{ marginTop: "20px" }}>My Favorites</h1>
      {favorites.length === 0 ? (
        <div className={styles.empty}>
          <p>No favorites yet.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {favorites.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </main>
  );
};

export default FavoritesPage;
