import pokemonTypes from '../types/pokemonTypes';

export const getPokemonsRequest = () => ({
  type: pokemonTypes.GET_POKEMONS_REQUEST
});

export const getPokemonsSuccess = () => ({
  type: pokemonTypes.GET_POKEMONS_SUCCESS
});

export const getPokemonsError = () => ({
  type: pokemonTypes.GET_POKEMONS_ERROR
});

export const getPokemonRequest = () => ({
  type: pokemonTypes.GET_POKEMON_REQUEST
});

export const getPokemonStop = () => ({
  type: pokemonTypes.GET_POKEMON_STOP
});

export const getPokemonSuccess = (data: any) => ({
  type: pokemonTypes.GET_POKEMON_SUCCESS,
  payload: data
});

export const getPokemonError = () => ({
  type: pokemonTypes.GET_POKEMON_ERROR
});