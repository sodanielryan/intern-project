const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit = 200, offset = 0) => {
  const res = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );
  const data = await res.json();
  return data.results;
};

export const getPokemonDetail = async (nameOrId: string | number) => {
  const res = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  const data = await res.json();
  return data;
};