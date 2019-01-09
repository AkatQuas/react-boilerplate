import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import auth from './modules/auth';
import { STATES } from './types';

export const history = createHistory();
const router_mw = routerMiddleware(history);

const enhancers = process.env.NODE_ENV === 'development' ? applyMiddleware(thunk, router_mw, logger) : applyMiddleware(thunk, router_mw);

const configureStore = (initState = {}) => createStore(
    combineReducers({
        [STATES.AUTH]: auth,
        router: routerReducer
    }),
    initState,
    enhancers
);

export default configureStore();
