import React, { useEffect, useState, useContext } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { FavoriteProvider } from "../context/FavoriteContext";
import { getPokemons, getPokemonsData } from "../api";
import FavoriteContext from "../context/FavoriteContext";
import Pokemons from "../components/Pokemons";

const localStorageKey = "favorite_pokemon";

const FavoritePokemons = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  console.log("teste", favoritePokemons);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(24, 24 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <Link to="/">
        <div className="favorites-navbar">⬅️ voltar</div>
      </Link>
      <NavBar />
      <h1 className="title-pokedex2">Pokemons</h1>
      <div className="poke-list">
        {favoritePokemons.map((pokemon, index) => (
          <Pokemons pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePokemons;
