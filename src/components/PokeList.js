import React from "react";
import { connect } from 'react-redux';
import PokemonItem from "./PokemonItem";

const PokeList = ({ click, pokemons, pending }) => {
  return (
    <div className="list-container">
      <h3>Tries : {click}</h3>
      <h3>Pokedex : {pokemons.filter(pokemon => pokemon.isCatch).length} / {pokemons.length}
      </h3>
      <ul>
        {
          pokemons.map( pokemon => (
            <PokemonItem key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = ({ click, pokemons, pending }) => {
  return {
    click,
    pokemons,
    pending
  };
};

export default connect(mapStateToProps)(PokeList);
