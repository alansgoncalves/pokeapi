import React from "react";

const Pokemons = (props) => {
  const { pokemon } = props;
  console.log("teste", pokemon);
  return (
    <div className="pokemon-card">
      <div className="poke-img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div>
        <h3>{pokemon.name}</h3>
        <div>#{pokemon.id}</div>
      </div>
      <div>
        <div>
          {pokemon.types.map((type, index) => {
            return <div key={index}>{type.name}</div>;
          })}
        </div>
        <div>♥️</div>
      </div>
    </div>
  );
};

export default Pokemons;
