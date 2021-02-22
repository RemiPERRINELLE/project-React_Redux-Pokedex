import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux';

import { showPokemon, catchPokemon } from './store/action';
import fetchPokemons from './store/fetchPokemons'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import Loader from './components/Loader';
import Rules from './components/Rules';

const App = ({ fetchPokemons, pending, showPokemon, pokemons, catchPokemon }) => {
  useEffect(() => {
    fetchPokemons();
  },
  [fetchPokemons]);

  if(pending) {
    return <Loader />
  }

  return (
    <div className="App">
      <Rules />
      <div className="game">
      <GameBoy
        showPokemon={() => showPokemon(pokemons)}
        catchPokemon={catchPokemon} />
      <PokeList />
      </div>
    </div>
  );
};

const mapStateToProps = ({ pending, pokemons }) => {
  return {
    pending,
    pokemons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    showPokemon: pokemons => dispatch(showPokemon(pokemons)),
    catchPokemon: () => dispatch(catchPokemon())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
