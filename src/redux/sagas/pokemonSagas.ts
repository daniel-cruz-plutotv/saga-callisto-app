import { put, fork, call, race, all, take, delay, cancel, cancelled, select, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
import * as pokemon from '../../helpers/crud/pokemon';
import * as pokeActions from '../actions/pokemonActions';
import pokemonTypes from '../types/pokemonTypes';


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

function* getEachPokemon(responses: any, delayTime:number = 0): any {
  try {
    yield delay(delayTime);
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
function* getAllPokemonsTakeSaga():any {
  
  while (true){
   yield take(pokemonTypes.GET_POKEMONS_REQUEST_TAKE);
   yield fetchPokemons()
  }
}

function* fetchPokemons():any{
  yield delay(3000);
  const offset = yield select(state =>  state.pokemons.next);
  try {
    const resp: any = yield call( pokemon.getPokemons, offset );
    const req: any[] = yield fork( getEachPokemon, resp);
    yield put( pokeActions.getPokemonsSuccess(resp.offset));
    yield delay(10000);
    yield cancel(req);
    const loadedPokemons = yield select(state =>  state.pokemons.data);
    yield put( pokeActions.getPokemonsSuccess(loadedPokemons.length));
  } catch( error:any ) {
    yield put( pokeActions.getPokemonsError())
  }
}



export function* getAllPokemonsTakeEverySaga(){
  yield takeEvery( pokemonTypes.GET_POKEMONS_REQUEST_TAKE_EVERY as any, fetchPokemons as any )
}

export function* getAllPokemonsTakeLatestSaga(){
  yield takeLatest( pokemonTypes.GET_POKEMONS_REQUEST_TAKE_LATEST as any, fetchPokemons as any )
}

export function* getAllPokemonsTakeLeadingSaga(){
  yield takeLeading( pokemonTypes.GET_POKEMONS_REQUEST_TAKE_LEADING as any, fetchPokemons as any )
}

export function* getAllPokemonsRace(){
  yield takeEvery( pokemonTypes.GET_POKEMONS_REQUEST_RACE as any, racePokemonsSaga as any )
}

export function* getAllPokemonsRaceAll(){
  yield takeEvery( pokemonTypes.GET_POKEMONS_REQUEST_ALL as any, raceAllPokemonsSaga as any )
}

export function* racePokemonsSaga(){
  yield race ([
    call( getEachPokemon, [{url:'https://pokeapi.co/api/v2/pokemon/1/'}, {url:'https://pokeapi.co/api/v2/pokemon/2/'}, {url:'https://pokeapi.co/api/v2/pokemon/3/'}], 0 ),
    call( getEachPokemon, [{url:'https://pokeapi.co/api/v2/pokemon/4/'}, {url:'https://pokeapi.co/api/v2/pokemon/5/'}, {url:'https://pokeapi.co/api/v2/pokemon/6/'}], 1000 ),
    call( getEachPokemon, [{url:'https://pokeapi.co/api/v2/pokemon/7/'}, {url:'https://pokeapi.co/api/v2/pokemon/8/'}, {url:'https://pokeapi.co/api/v2/pokemon/9/'}], 2500 ),
  ])
  console.log('Race completed');
}

export function* raceAllPokemonsSaga(){
  yield all ([
    call( getEachPokemon, [{url:'https://pokeapi.co/api/v2/pokemon/1/'}, {url:'https://pokeapi.co/api/v2/pokemon/2/'}, {url:'https://pokeapi.co/api/v2/pokemon/3/'}], 0 ),
    call( getEachPokemon, [{url:'https://pokeapi.co/api/v2/pokemon/4/'}, {url:'https://pokeapi.co/api/v2/pokemon/5/'}, {url:'https://pokeapi.co/api/v2/pokemon/6/'}], 1000 ),
    call( getEachPokemon, [{url:'https://pokeapi.co/api/v2/pokemon/7/'}, {url:'https://pokeapi.co/api/v2/pokemon/8/'}, {url:'https://pokeapi.co/api/v2/pokemon/9/'}], 2500 ),
  ])
  console.log('All completed');
}

const pokemonSagas = [
  fork( getAllPokemons ),
  fork( getAllPokemonsTakeSaga ),
  fork( getAllPokemonsTakeEverySaga ),
  fork( getAllPokemonsTakeLatestSaga ),
  fork( getAllPokemonsTakeLeadingSaga ),
  fork( getAllPokemonsRace ),
  fork( getAllPokemonsRaceAll ),
];

export default pokemonSagas;