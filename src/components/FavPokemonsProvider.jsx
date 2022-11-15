import React, { useEffect, useState } from "react";
import FavoriteContext from "../context/FavoriteContext";

const getPokemonsLocalStorage = () => {
  return localStorage.getItem("fav_pokemons") || [];
};

const FavPokemonsProvider = ({ children }) => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  const AddPokemons = (pokemon) => {
    setFavoritePokemons((previousState) => {
      return previousState.some((poke) => poke.name === pokemon.name)
        ? [...previousState.filter((poke) => poke.name !== pokemon.name)]
        : [...previousState, pokemon];
    });
  };

  useEffect(() => {
    const data = getPokemonsLocalStorage();
    if (!data) {
      localStorage.setItem("fav_pokemons", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const data = getPokemonsLocalStorage();
    if (data) {
      localStorage.setItem(
        "fav_pokemons",
        JSON.stringify(...data, ...favoritePokemons)
      );
    }
  }, [favoritePokemons]);

  return (
    <FavoriteContext.Provider value={{ favoritePokemons, AddPokemons }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavPokemonsProvider;
