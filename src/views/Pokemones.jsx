import { useContext, useState } from "react";
import { PokemonesContext } from "../context/PokemonesContext";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const { pokemones } = useContext(PokemonesContext);
  const [pokemonSelected, setPokemonSelected] = useState("");
  const navigate = useNavigate();
  const goToPokemonDetail = () => {
    if (pokemonSelected) navigate(`/pokemones/${pokemonSelected}`);
    else alert("Debe seleccionar un pokemón");
  };
  return (
    <div className="mt-5 text-center">
      <h1 className="title pb-2">Busca tu Pokemón</h1>
      <div className="d-flex flex-column align-items-center container">
        <select
          value={pokemonSelected}
          className="form-select mt-5 w-50"
          onChange={(e) => setPokemonSelected(e.target.value)}
        >
          <option value="" disabled>
            Seleccione un Pokemón
          </option>
          {pokemones.map((pokemon, i) => (
            <option key={i}>{pokemon.name}</option>
          ))}
        </select>
        <Button
          variant="search"
          className="mt-5 w-20"
          onClick={goToPokemonDetail}
        >
          Ver Detalles
        </Button>
      </div>
    </div>
  );
};

export default Pokemones;
