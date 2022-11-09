import React from "react";
import "../style/style.css";
import Pokemons from "./Pokemons";
import Pagination from "./Pagination";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="cont-pagination">
        <h1 className="title-pokedex">Pokemons</h1>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div className="loading-poke">Carregando Pokemons...</div>
      ) : (
        <div className="poke-list">
          {pokemons.map((pokemon, index) => {
            return <Pokemons pokemon={pokemon} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
