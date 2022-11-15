import React, { useContext, useEffect, useState } from "react";
import FavoriteContext from "../context/FavoriteContext";

const Pokemons = (props) => {
  const { pokemon } = props;
  const { AddPokemons } = useContext(FavoriteContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";

  const [isFavorite, setIsFavorite] = useState(false);

  const clickHeart = (e) => {
    e.preventDefault();
    AddPokemons(pokemon);
    // setIsFavorite((previousState) => !previousState);
  };

  useEffect(() => {
    const storage = localStorage.getItem("fav_pokemons") || [];
    console.log("teste", storage);
    const favPokemon = storage.some((poke) => poke.name === pokemon.name);
    // setIsFavorite(favPokemon);
  }, []);

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
          <button onClick={clickHeart}>
            <div className="fav-poke">{isFavorite ? redHeart : blackHeart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
