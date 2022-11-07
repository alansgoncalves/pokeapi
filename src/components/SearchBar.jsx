import React, { useState } from "react";
import { searchPokemon } from "./api";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="cont-searchbar">
      <div className="search-input">
        <input placeholder="Pesquisar pokemon..." onChange={handleChange} />
      </div>
      <div className="btn-search">
        <button onClick={handleClick}>Pesquisar</button>
      </div>
      <div>
        {pokemon && (
          <div>
            <div>Name: {pokemon.name}</div>
            <div>Peso: {pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
