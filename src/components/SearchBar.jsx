import React, { useState } from "react";

const SearchBar = (props) => {
  const { getSearch } = props;
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleClick = async (e) => {
    getSearch(search);
  };

  return (
    <div className="cont-searchbar">
      <div className="search-input">
        <input placeholder="Pesquisar pokemon..." onChange={handleChange} />
      </div>
      <div className="btn-search">
        <button onClick={handleClick}>Pesquisar</button>
      </div>
    </div>
  );
};

export default SearchBar;
