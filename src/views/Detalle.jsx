import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonesContext } from "../context/PokemonesContext";
import PokemonCard from "../components/PokemonCard";

const Detalle = () => {
  const { name } = useParams();
  const { pokemonByName, loading, getPokemonByName } =
    useContext(PokemonesContext);
  useEffect(() => {
    getPokemonByName(name);
  }, [name]);
  if (loading) {
    return <p className="cargando">Atrapando tu pokemón...</p>;
  }
  return <PokemonCard pokemon={pokemonByName} />;
};
export default Detalle;
