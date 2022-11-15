import React, { useEffect, useState } from "react";
import FavoriteContext from "../context/FavoriteContext";

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
    localStorage.setItem("fav_pokemons", JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  return (
    <FavoriteContext.Provider value={{ favoritePokemons, AddPokemons }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavPokemonsProvider;
