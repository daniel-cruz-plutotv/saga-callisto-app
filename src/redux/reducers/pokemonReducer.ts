// TYPES
import pokemonTypes from '../types/pokemonTypes';

interface PokemonInt {
  loading: boolean,
  error: boolean,
  data?: any[],
  next: number,
}

// INITIAL STATE
const initial_state: PokemonInt = {
  loading: false,
  error: false,
  data: [],
  next:0
};

// REDUCER
const pokemonReducer = ( state: any = initial_state, action: any ) => {
  
  switch( action.type ) {
    case pokemonTypes.GET_POKEMONS_REQUEST_TAKE_EVERY:
    case pokemonTypes.GET_POKEMONS_REQUEST_TAKE:
    case pokemonTypes.GET_POKEMONS_REQUEST_TAKE_LATEST:
    case pokemonTypes.GET_POKEMON_REQUEST:
    case pokemonTypes.GET_POKEMONS_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case pokemonTypes.GET_POKEMON_STOP:
    case pokemonTypes.GET_POKEMONS_SUCCESS: {
      console.log('action',action);
      return {
        ...state,
        loading: false,
        error: false,
        next: action.payload,
      }
    }
    case pokemonTypes.GET_POKEMON_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [ ...state.data, action.payload ]
      }
    }
    case pokemonTypes.GET_POKEMON_ERROR:
    case pokemonTypes.GET_POKEMONS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    case pokemonTypes.CLEAN_POKEMONS: {
      return initial_state;
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default pokemonReducer;