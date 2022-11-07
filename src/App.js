import { useState, useEffect } from "react";
import { getPokemons } from "./api";
import NavBar from "./components/NavBar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data);
      setPokemons(data.results);
    } catch (error) {}
  };
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
