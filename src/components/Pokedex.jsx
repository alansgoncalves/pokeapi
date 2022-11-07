import React from "react";
import "../style/style.css";
import Pokemons from "./Pokemons";

const Pokedex = (props) => {
  const { pokemons } = props;
  console.log("teste2", pokemons);
  return (
    <div>
      <div className="cont-pagination">
        <h1>Pokedex</h1>
        <div>Pagination</div>
      </div>
      <div className="poke-list">
        {pokemons.map((pokemon, index) => {
          return <Pokemons pokemon={pokemon} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Pokedex;
