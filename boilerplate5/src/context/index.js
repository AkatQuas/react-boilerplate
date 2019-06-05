import { all, fork, takeLatest } from 'redux-saga/effects';
import { combineReducers } from 'redux';

import tick from './tick';

const rootContext = [
  tick,
];

const root = rootContext.reduce(
  (acc, context) => {
    const { name } = context;
    acc.reducers[name] = loadReducer(context);
    acc.sagas = acc.sagas.concat(loadSaga(context));
    return acc;
  },
  {
    reducers: {},
    sagas: [],
  }
);

rootContext.length = 0;

export const rootReducer = combineReducers(root.reducers);

export const rootSaga = function* () {
  yield all(root.sagas);
}

function loadReducer(context) {
  const { state: init, reducer } = context;

  return (state = init, action) => {
    const { type } = action;
    if (!reducer[type]) {
      return state;
    }
    return reducer[type](state, action);
  }
}

function loadSaga(context) {
  const { actions } = context;
  return Object.entries(actions)
    .reduce((acc, item) => {
      acc.push(bindAction(item[0], item[1]));
      return acc;
    }, []);
}


function bindAction(actionName, func) {
  return fork(
    takeEffect(
      actionName,
      wrapEffect(func)
    )
  );
}

function takeEffect(actionName, func) {
  return function* () {
    yield takeLatest(actionName, func);
  }
}

function wrapEffect(func) {
  return function* (...args) {
    try {
      yield func(...args);
    } catch (error) {
      // console.error('error happened');
      // console.log(error);
    }
  }
}
