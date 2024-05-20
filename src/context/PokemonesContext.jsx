import { createContext, useEffect, useState } from "react";

export const PokemonesContext = createContext();

const PokemonesProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonByName, setPokemonByName] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = "https://pokeapi.co/api/v2/pokemon";
  const getPokemons = async () => {
    const response = await fetch(url);
    const res = await response.json();
    setPokemones(res.results);
  };

  const getPokemonByName = async (name) => {
    setLoading(true);
    const response = await fetch(`${url}/${name}`);
    const data = await response.json();
    const src = data.sprites.other.dream_world.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat,
    }));
    const types = data.types.map((type) => type.type.name).join("  ");
    setPokemonByName({ name, stats, src, types });
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PokemonesContext.Provider
      value={{ pokemones, pokemonByName, getPokemonByName, loading }}
    >
      {children}
    </PokemonesContext.Provider>
  );
};

export default PokemonesProvider;
