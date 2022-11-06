import React from "react";
import "../style/style.css";
import Logo from "./images/pokemon.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="" />
      <div>♥️</div>
    </div>
  );
};

export default NavBar;
