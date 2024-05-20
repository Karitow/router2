import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemones from "./views/Pokemones";
import Detalle from "./views/Detalle";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;
