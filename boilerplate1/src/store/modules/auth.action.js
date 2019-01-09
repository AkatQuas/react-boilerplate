import { SET_AUTH } from '../types';

export const setAuth = payload => ({
    type: SET_AUTH,
    payload
});

export const clearAuth = _ => ({
    type: SET_AUTH,
    payload: null
});
