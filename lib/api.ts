const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(limit = 100000, offset = 0) {
  const res = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );
  const data = await res.json();
  return data.results;
}

export async function getPokemonDetail(nameOrId: string | number) {
  const res = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  const data = await res.json();
  return data;
}

export async function getPokemonTypes() {
  const res = await fetch(`${BASE_URL}/type`);
  const data = await res.json();
  return data.results;
}
