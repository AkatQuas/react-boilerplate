import { SET_AUTH } from '../types';

const handler = {
    [SET_AUTH]: (state, payload) => ({
        ...state,
        isAuth: !!payload,
        token: payload || void 0
    })
};

export default (state = {
    isAuth: false,
    token: void 0
}, { type, payload }) => handler[type] ? handler[type](state, payload) : state;