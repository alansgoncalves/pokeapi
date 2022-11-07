import React, { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";
import "../style/style.css";
import Logo from "./images/pokemon.png";

const NavBar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  // console.log(favoritePokemons);
  return (
    <div className="cont-navbar">
      <div className="logo">
        <img src={Logo} alt="" width="160px" />
      </div>
      <div className="heart-navbar">
        &#10084;&#65039; {favoritePokemons.length}
      </div>
    </div>
  );
};

export default NavBar;
