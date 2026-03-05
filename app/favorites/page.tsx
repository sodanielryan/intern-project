"use client";

import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/context/FavoriteContext";
import styles from "@/styles/Favorite.module.css";
import { useTeam } from "@/context/TeamContext";

const FavoritesPage = () => {
  const { favorites, removeFavorite } = useFavorites();
  const { team, removeFromTeam } = useTeam();

  return (
    <main className={styles.main}>
      <h1>My Team ({team.length}/6)</h1>
      {team.length === 0 ? (
        <p className={styles.empty}>No team members yet.</p>
      ) : (
        <div className={styles.grid}>
          {team.map((pokemon) => (
            <div key={pokemon.id} className={styles.card}>
              <Link
                href={`/pokemon/${pokemon.id}`}
                style={{ textDecoration: "none" }}
              >
                <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  width={96}
                  height={96}
                  priority
                />
                <p className={styles.number}>
                  #{String(pokemon.id).padStart(3, "0")}
                </p>
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
              </Link>
              <button
                className={styles.addFave}
                onClick={() => removeFromTeam(pokemon.id)}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "8px",
                  borderRadius: "9999px",
                  padding: "4px 0",
                }}
              >
                Remove
              </button>
            </div>
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
            <div key={pokemon.id} className={styles.card}>
              <Link
                href={`/pokemon/${pokemon.id}`}
                style={{ textDecoration: "none" }}
              >
                <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  width={96}
                  height={96}
                  priority
                />
                <p className={styles.number}>
                  #{String(pokemon.id).padStart(3, "0")}
                </p>
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
              </Link>
              <button
                className={styles.addFave}
                onClick={() => removeFavorite(pokemon.id)}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "8px",
                  borderRadius: "9999px",
                  padding: "4px 0",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default FavoritesPage;
