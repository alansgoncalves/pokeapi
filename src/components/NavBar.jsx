import React, { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";
import "../style/style.css";
import Logo from "./images/pokemon.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  // console.log(favoritePokemons);
  return (
    <div className="cont-navbar">
      <div className="logo">
        <img src={Logo} alt="" width="160px" />
      </div>
      <div className="heart-navbar">
        <p>Favoritos&nbsp;</p>
        <Link to="/favorite" style={{ textDecoration: "none" }}>
          <p>&#10084;&#65039;</p>
        </Link>
        <p>&nbsp;{favoritePokemons.length}</p>
      </div>
    </div>
  );
};

export default NavBar;
