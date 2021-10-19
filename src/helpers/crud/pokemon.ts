// HELPERS
import { getRequest } from '../requests/index';
import { parsePokemonData } from '../parsing/pokemonParse';

const path = '/pokemon';

// GET FUNCTION
export const getPokemons: any = async (offset:number) => {
  const resp = await getRequest(`${path}?offset=${offset}`);
  const pokemons = getPokemonsClear(resp);
  return pokemons;
}

const getPokemonsClear = (data: any) => {
  const results = data.data.results
  return results;
}

export const getPokemon = async (path: string) => {
  const resp: any = await getRequest(path);
  const pokemon = getPokemonClear(resp);
  return pokemon;
}

const getPokemonClear = (data: any) => {
  const resp = parsePokemonData(data);
  return resp;
}