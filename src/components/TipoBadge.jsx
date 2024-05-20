import react from "react";
import Badge from "react-bootstrap/Badge";

const colorPorTipo = {
  fire: "danger",
  grass: "success",
  poison: "poison",
  water: "info",
  bug: "bug",
  flying: "flying",
  default: "secondary",
};

const TipoBadge = ({ types }) => {
  if (!types || types.trim() === "") {
    return null; // Si types es null o una cadena vacía, retornamos null para evitar errores
  }

  const tipos = types.trim().split(" ");

  const badgeList = tipos.map((tipo, index) => {
    const color = colorPorTipo[tipo] || colorPorTipo.default;
    return (
      <Badge key={index} bg={color} className="me-2">
        {tipo}
      </Badge>
    );
  });

  return <>{badgeList}</>;
};

export default TipoBadge;
