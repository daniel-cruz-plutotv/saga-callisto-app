import pokemonTypes from '../types/pokemonTypes';

export const getPokemonsRequest = () => ({
  type: pokemonTypes.GET_POKEMONS_REQUEST
});

export const getPokemonsSuccess = (offset: any = 0) => ({
  type: pokemonTypes.GET_POKEMONS_SUCCESS,
  payload: offset
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

export const getAllPokemonsTake = () => ({
  type: pokemonTypes.GET_POKEMONS_REQUEST_TAKE
});

export const getAllPokemonsTakeEvery = () => ({
  type: pokemonTypes.GET_POKEMONS_REQUEST_TAKE_EVERY
});

export const getAllPokemonsTakeLatest = () => ({
  type: pokemonTypes.GET_POKEMONS_REQUEST_TAKE_LATEST
});

export const getAllPokemonsTakeLeading = () => ({
  type: pokemonTypes.GET_POKEMONS_REQUEST_TAKE_LEADING
});

export const racePokemons = () => ({
  type: pokemonTypes.GET_POKEMONS_REQUEST_RACE
});

export const raceAllPokemons = () => ({
  type: pokemonTypes.GET_POKEMONS_REQUEST_ALL
});

export const cleanPokemons = () => ({
  type: pokemonTypes.CLEAN_POKEMONS
});