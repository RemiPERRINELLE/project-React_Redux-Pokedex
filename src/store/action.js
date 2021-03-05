export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING';
export const SHOW_POKEMON = 'SHOW_POKEMON';
export const CATCH_POKEMON = 'CATCH_POKEMON';
export const HOME_SCREEN = 'HOME_SCREEN';



export const fetchPokemonSuccess = pokemons => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemons
});


export const fetchPokemonPending = pokemons => ({
  type: FETCH_POKEMON_PENDING
});


export const showPokemon = pokemons => {
  const filteredPokemons = pokemons.filter(pokemon => !pokemon.isCatch);
  const max = filteredPokemons.length;
  const random = Math.floor(Math.random() * max);
  const onScreen = filteredPokemons[random];

  const otherIsSelected = document.getElementsByClassName('pokemon-item-selected')[0];
  if( otherIsSelected ) {
    otherIsSelected.classList.remove('pokemon-item-selected');
  }

  return dispatch => {
    dispatch({ type: SHOW_POKEMON, onScreen })
  };
};


export const catchPokemon = () => {
  const random = Math.floor(Math.random() * 255)

  return dispatch => {
    dispatch({ type: CATCH_POKEMON, random })
  };
};


export const homeScreen = () => {
  const onScreen = {
    home: true
  };

  const otherIsSelected = document.getElementsByClassName('pokemon-item-selected')[0];
  if( otherIsSelected ) {
    otherIsSelected.classList.remove('pokemon-item-selected');
  }

  return dispatch => {
    dispatch({ type: HOME_SCREEN, onScreen })
  };
};


export const showSelectedPokemon = (event, pokemon) => {
  var onScreen = pokemon;
  if( event.currentTarget.classList.contains("pokemon-item-selected") ) {
    onScreen = { ...pokemon, home: true }
  }

  const otherIsSelected = document.getElementsByClassName('pokemon-item-selected')[0];
  if( otherIsSelected && otherIsSelected !== event.currentTarget ) {
    otherIsSelected.classList.remove('pokemon-item-selected');
  }

  event.currentTarget.classList.toggle("pokemon-item-selected");

  return dispatch => {
    dispatch({ type: SHOW_POKEMON, onScreen })
  };
}
