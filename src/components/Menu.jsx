import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar className="d-flex justify-content-between px-5">
      <Navbar.Brand>
        <img width="40" src="/pokeparada.png" alt="pokeparada" />
      </Navbar.Brand>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "me-3 active" : "me-3")}
          to="/"> Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/pokemones">
          {" "}
          Pokemones{" "}
        </NavLink>
      </div>
    </Navbar>
  );
};
export default Menu;
