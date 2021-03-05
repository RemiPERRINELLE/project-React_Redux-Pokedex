import initialState from './initialState'
import { FETCH_POKEMON_SUCCESS, FETCH_POKEMON_PENDING, SHOW_POKEMON, CATCH_POKEMON, HOME_SCREEN } from './action';

const reducer = ( state = initialState, action ) => {
  switch(action.type) {

    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemons: action.pokemons,
        pending: false
      }

    case FETCH_POKEMON_PENDING:
      return {
        ...state,
        pending: true
      }

    case SHOW_POKEMON:
      return {
        ...state,
        onScreen: action.onScreen,
      }

    case CATCH_POKEMON:
      if( state.onScreen.id){
        return {
          ...state,
          tries: state.tries + 1,
          pokemons: state.pokemons.map(pokemon => {
            if( pokemon.id === state.onScreen.id ) {
              const isCaught = pokemon.captureRate + action.random;
              if( isCaught >= 255 ) {
                return { ...pokemon, isCatch: true };
              }
              return pokemon;
            }
            return pokemon;
          })
        }
      }
      break;

    case HOME_SCREEN:
      return {
        ...state,
        onScreen: action.onScreen,
      }

    default:
      return state;
  }
};

export default reducer;