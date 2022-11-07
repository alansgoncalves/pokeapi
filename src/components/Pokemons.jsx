import React from "react";

const Pokemons = (props) => {
  const { pokemon } = props;
  console.log("teste", pokemon);
  return (
    <div className="pokemon-card">
      <div className="poke-img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <p>#{pokemon.id}</p>
        </div>
        <div className="card-bottom">
          <div className="poke-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="poke-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <div className="fav-poke">&#10084;&#65039;</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
