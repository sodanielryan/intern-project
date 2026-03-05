"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Pokemon } from "@/types/pokemon";

interface TeamContextType {
  team: Pokemon[];
  addToTeam: (pokemon: Pokemon) => void;
  removeFromTeam: (id: number) => void;
  isInTeam: (id: number) => boolean;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [team, setTeam] = useState<Pokemon[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("team");
    if (stored) {
      setTeam(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  const addToTeam = (pokemon: Pokemon) => {
    setTeam((prev) => {
      if (prev.find((p) => p.id === pokemon.id)) return prev;
      if (prev.length >= 6) {
        alert("Max of 6 Pokémon only");
        return prev;
      }
      return [...prev, pokemon];
    });
  };

  const removeFromTeam = (id: number) => {
    setTeam((prev) => prev.filter((p) => p.id !== id));
  };

  const isInTeam = (id: number) => team.some((p) => p.id === id);

  return (
    <TeamContext.Provider value={{ team, addToTeam, removeFromTeam, isInTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
};

export default TeamProvider;
