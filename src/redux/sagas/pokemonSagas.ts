import { put, fork, call, take, delay, cancel, cancelled } from 'redux-saga/effects';
import * as pokemon from '../../helpers/crud/pokemon';
import * as pokeActions from '../actions/pokemonActions';

function* getAllPokemons() {
  yield take(pokeActions.getPokemonsRequest);
  try {
    const resp: any[] = yield call( pokemon.getPokemons );
    const req: any[] = yield fork( getEachPokemon, resp);
    yield put( pokeActions.getPokemonsSuccess() );
    yield delay(10000);
    yield cancel(req);
  } catch( error ) {
    yield put( pokeActions.getPokemonsError() )
  }
}

function* getEachPokemon(responses: any): any {
  try {
    for( let index = 0; index < responses.length; index++) {
      yield put(pokeActions.getPokemonRequest());
      const path = responses[index].url;
      const resp: any = yield call( pokemon.getPokemon, path );
      yield put(pokeActions.getPokemonSuccess(resp));
      yield delay(500);
    }
  } catch( error ) {
    yield put(pokeActions.getPokemonError());
  } finally {
    if( yield cancelled() ) {
      yield put( pokeActions.getPokemonStop() );
    } 
  }
}

const pokemonSagas = [
  fork( getAllPokemons )
];

export default pokemonSagas;