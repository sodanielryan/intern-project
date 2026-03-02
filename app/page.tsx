import { getPokemonList } from "@/lib/api";

export default async function Home() {
  const pokemon = await getPokemonList();
  console.log(pokemon);

  return (
    <main>
      <h1>PokéDex</h1>
      <pre>{JSON.stringify(pokemon, null, 2)}</pre>
    </main>
  );
}
