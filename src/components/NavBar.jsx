import React, { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";
import "../style/style.css";
import Logo from "./images/pokemon.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const navigate = useNavigate();

  return (
    <div className="cont-navbar">
      <div className="logo">
        <img src={Logo} alt="" width="160px" />
      </div>
      <div className="heart-navbar">
        <p>Favoritos&nbsp;</p>
        <p
          onClick={() => navigate("/favorites")}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          &#10084;&#65039;
        </p>
        <p>&nbsp;{favoritePokemons.length}</p>
      </div>
    </div>
  );
};

export default NavBar;
