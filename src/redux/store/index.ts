// LIBRARIES
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// REDUCERS
import reducers from '../reducers/index';

// SAGAS
import rootSaga from '../sagas';

// CONFIG
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
// CombineReducers
  reducers,
  // Redux Devtools
  composeWithDevTools(
    applyMiddleware( sagaMiddleware )
  )
);

// runing sagas
sagaMiddleware.run(rootSaga);
// initSagas( sagaMiddleware );

export default store;
