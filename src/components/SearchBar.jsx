import React, { useState } from "react";
import { searchPokemon } from "./api";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async (e) => {
    const data = await searchPokemon(search);
    console.log(data);
  };

  return (
    <div>
      <input placeholder="Pesquisar pokemon..." onChange={handleChange} />
      <button onClick={handleClick}>Pesquisar</button>
    </div>
  );
};

export default SearchBar;
