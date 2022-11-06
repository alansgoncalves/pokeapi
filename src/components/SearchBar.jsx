import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    console.log("Clicou!");
  };

  return (
    <div>
      <input placeholder="Pesquisar pokemon..." onChange={handleChange} />
      <button onClick={handleClick}>Pesquisar</button>
    </div>
  );
};

export default SearchBar;
