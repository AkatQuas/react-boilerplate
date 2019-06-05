import {
  call, put, select
} from 'redux-saga/effects';
import { delayStep } from '../http';

export default {
  name: 'tick',
  state: {
    tick: 0,
    locked: false,
  },
  reducer: {
    SET_TICK: (state, { tick }) => ({ ...state, tick }),
    SET_LOCK_STATUS: (state, { locked }) => ({ ...state, locked: !!locked }),
    ADD_TICK: (state, { step = 1 }) => {
      if (state.locked) {
        return state;
      }
      return {
        ...state, tick: state.tick + step
      }
    },
    SUBSTRACT_TICK: (state, { step = 1 }) => {
      if (state.locked) {
        return state;
      }
      return ({
        ...state, tick: state.tick - step,
      })
    }
  },
  actions: {
    *ASYNC_ADD_TICK({ payload }) {
      // the state is the root,
      // rather than the local state written in this file
      const lock = yield select(state => state.tick.locked);
      if (lock) {
        return;
      }
      const step = yield call(delayStep, payload);
      yield put({ type: 'ADD_TICK', step });
    },
    *ASYNC_SUBSTRACT_TICK({ payload }) {
      const lock = yield select(state => state.tick.locked);
      if (lock) {
        return;
      }
      const step = yield call(delayStep, payload);
      yield put({ type: 'SUBSTRACT_TICK', step });
    }

  }
}
