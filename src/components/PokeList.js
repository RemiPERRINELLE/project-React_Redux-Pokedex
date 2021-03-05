import React from "react";
import { connect } from 'react-redux';
import PokemonItem from "./PokemonItem";

const PokeList = ({ tries, pokemons, pending, showSelectedPokemon }) => {
  return (
    <div className="list-container">
      <h3>Tries : {tries}</h3>
      <h3>Pokedex : {pokemons.filter(pokemon => pokemon.isCatch).length} / {pokemons.length}
      </h3>
      <ul>
        {
          pokemons.map( pokemon => (
            <PokemonItem key={pokemon.id} pokemon={pokemon} showSelectedPokemon={showSelectedPokemon} />
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tries, pokemons, pending }) => {
  return {
    tries,
    pokemons,
    pending
  };
};

export default connect(mapStateToProps)(PokeList);
