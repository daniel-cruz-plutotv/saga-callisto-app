// LIBRARIES
import { all } from 'redux-saga/effects';

// SAGAS
import pokemonSagas from './pokemonSagas';

export default function* rootSaga() {
  yield all({
    ...pokemonSagas
  });
};
