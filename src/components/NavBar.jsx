import React from "react";
import "../style/style.css";
import Logo from "./images/pokemon.png";

const NavBar = () => {
  return (
    <div className="cont-navbar">
      <div className="logo">
        <img src={Logo} alt="" width="160px" />
      </div>
      <div className="heart-navbar">🖤</div>
    </div>
  );
};

export default NavBar;
