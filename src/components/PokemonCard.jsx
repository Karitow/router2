import { Card } from "react-bootstrap";
import TipoBadge from "./TipoBadge";
import ListGroup from "react-bootstrap/ListGroup";
import NotFound from "./NotFound"

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      {pokemon ? (
        <>
          <Card style={{ width: "20rem" }} className="mt-5 mx-auto p-2">
            <Card.Img height="200" variant="top" src={pokemon.src} />
            <Card.Body>
              <Card.Title className="titulo fw-bold text-center fs-3">
                {pokemon.name}
              </Card.Title>
              <ListGroup className="list-group-flush pb-2">
                {pokemon.stats.map((stat, i) => (
                  <ListGroup.Item key={i}>
                    {stat.name}: {stat.base}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Text className="text-secondary">
                {" "}
                {pokemon.types && <TipoBadge types={pokemon.types} />}
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      ) : (
        <NotFound/>
      )}
    </div>
  );
};
export default PokemonCard;
