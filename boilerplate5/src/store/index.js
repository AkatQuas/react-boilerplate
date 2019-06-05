import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import { rootReducer, rootSaga } from '../context';


export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      sagaMiddleware,
      createLogger(),
    )
  );

  sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
}
