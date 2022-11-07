import { useState, useEffect } from "react";
import { getPokemons, getPokemonsData } from "./api";
import NavBar from "./components/NavBar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      {loading ? (
        <div>Carregando Pokemons...</div>
      ) : (
        <Pokedex pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
