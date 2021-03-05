import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux';

import { showPokemon, catchPokemon, homeScreen, showSelectedPokemon } from './store/action';
import fetchPokemons from './store/fetchPokemons'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import Loader from './components/Loader';
import Rules from './components/Rules';

const App = ({ fetchPokemons, pending, showPokemon, pokemons, catchPokemon, homeScreen, onScreen, showSelectedPokemon }) => {
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
        catchPokemon={catchPokemon}
        homeScreen={homeScreen}
        onScreen={onScreen} />
      <PokeList 
      showSelectedPokemon={showSelectedPokemon} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ pending, pokemons, onScreen }) => {
  return {
    pending,
    pokemons,
    onScreen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    showPokemon: pokemons => dispatch(showPokemon(pokemons)),
    catchPokemon: () => dispatch(catchPokemon()),
    homeScreen: () => dispatch(homeScreen()),
    showSelectedPokemon: (event, pokemon) => dispatch(showSelectedPokemon(event, pokemon))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
