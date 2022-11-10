/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Route, Routes } from "react-router-dom";
import FavoritePokemons from "./pages/FavoritePokemons";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/favorite" element={<FavoritePokemons />} exact />
      </Routes>
    </div>
  );
}

export default App;
