/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Route, Routes } from "react-router-dom";
import FavPokemonsProvider from "./components/FavPokemonsProvider";
import FavoritesPokemons from "./pages/FavoritesPokemons";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <FavPokemonsProvider>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/favorites" element={<FavoritesPokemons />} exact />
        </Routes>
      </FavPokemonsProvider>
    </div>
  );
}

export default App;
