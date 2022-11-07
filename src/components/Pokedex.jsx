import React from "react";
import "../style/style.css";

const Pokedex = (props) => {
  const { pokemons } = props;

  return (
    <div>
      <div className="cont-pagination">
        <h1>Pokedex</h1>
        <div>Pagination</div>
      </div>
      <div className="poke-list">
        {pokemons.map((pokemon, index) => {
          return (
            <div key={index}>
              #{index + 1}: {pokemon.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
