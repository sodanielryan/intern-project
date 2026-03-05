"use client";

import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/app/context/FavoriteContext";
import styles from "@/styles/Favorite.module.css";

const FavoritesPage = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <main className={styles.main}>
      <h1>My Favorites</h1>

      {favorites.length === 0 ? (
        <div className={styles.empty}>
          <p>No favorites yet.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {favorites.map((pokemon) => (
            <div key={pokemon.id} className={styles.card}>
              <Link href={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none' }}>
                <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  width={50}
                  height={50}
                  priority
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
              </Link>

              <div className={styles.addToButtons}>
                <button 
                  className={`${styles.type} ${styles.addFave}`} 
                  onClick={() => removeFavorite(pokemon.id)}
                  style={{ cursor: 'pointer', width: '100%', marginTop: '8px' }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default FavoritesPage;