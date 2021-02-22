import React from "react";

const PokemonItem = ({ pokemon }) => {
  const imgSrc = pokemon.isCatch ? require('../imgs/pokeball_item.jpg') : pokemon.img;

  return (
    <li className="pokemon-item">
      <img alt={pokemon.name} src={imgSrc} />
      {pokemon.name}
    </li>
  );
};

export default PokemonItem;
