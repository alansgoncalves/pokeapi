import React, { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";

const Pokemons = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";

  const updateColorHeart = favoritePokemons.includes(pokemon.name)
    ? redHeart
    : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

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
            <div className="fav-poke">{updateColorHeart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
