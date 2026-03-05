"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Pokemon } from "@/types/pokemon";

interface TeamContextType {
  team: Pokemon[];
  addToTeam: (pokemon: Pokemon) => void;
  removeFromTeam: (id: number) => void;
  isInTeam: (id: number) => boolean;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

const TeamProvider = ({children}: {children: ReactNode}) => {
    const [team, setTeam] = useState<Pokemon[]>([]);

    const addToTeam = (pokemon: Pokemon) => {
        setTeam((prev) => {
            if (prev.find((p) => p.id === pokemon.id)) return prev;
            if (prev.length >= 6) {
                alert("Max of 6 Pokémon only");
                return prev;
            }
            return [...prev, pokemon];
        });
    }

    const removeFromTeam = (id: number) => {
        setTeam((prev) => prev.filter((p) => p.id !== id));
    };

    const isInTeam = (id: number) => team.some((p) => p.id === id);
}

