// libraries
import { combineReducers } from 'redux';

// reducers
import pokemonReducer from './pokemonReducer';
import typeReducer from './typeReducer';

// MIXING REDUCERS
const reducers = combineReducers({
  pokemons: pokemonReducer,
  types: typeReducer
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;