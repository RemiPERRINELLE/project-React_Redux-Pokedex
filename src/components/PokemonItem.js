import React from "react";

const PokemonItem = ({ pokemon, showSelectedPokemon }) => {

  const imgSrc = pokemon.isCatch ? require('../imgs/pokeball_item.jpg') : pokemon.img;
  
  if( pokemon.isCatch ) {
    return (
      <li className="pokemon-item pokemon-item-caught">
        <img alt={pokemon.name} src={imgSrc} />
        <span>{pokemon.name}</span>
      </li>
    );
  }
  return (
    <li className="pokemon-item" onClick={(event) => showSelectedPokemon(event, pokemon)}>
      <img alt={pokemon.name} src={imgSrc} />
      <span>{pokemon.name}</span>
    </li>
  );
};

export default PokemonItem;
