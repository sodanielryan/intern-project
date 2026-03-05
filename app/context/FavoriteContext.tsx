"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Pokemon } from "@/types/pokemon";

interface FavoriteContextType {
  favorites: Pokemon[];
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);
  
  const addFavorite = (pokemon: Pokemon) => {
    setFavorites((prev) => 
      prev.find((p) => p.id === pokemon.id) ? prev : [...prev, pokemon]
    );
  };
    
  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  }

  const isFavorite = (id: number) => favorites.some((p) => p.id === id);

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context){
    throw new Error("useFavorites must be in a FavoriteProvider")
  }
  return context;
}

export default FavoriteProvider;