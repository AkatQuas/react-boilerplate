import store from '@/store';
import { STATES } from '@/store/types';
import axios from 'axios';

const _instance = axios.create({
    baseURL: '/api',
    timeout: 5000
});

_instance.interceptors.request.use(
    config => {
        // todo
        let token = store.getState()[STATES.AUTH].token;
        if ( token ) {
            config.headers.Authorization = `JWT ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

_instance.interceptors.response.use(
    response => {
        // todo
        return response.data;
    },
    error => {
        if (error['response']) {
            switch (error['response'].status) {
                case 401:
                    console.log('401 need login');
                    // todo
                    break;
                default:
                    break;
            }

            return Promise.reject(error['response'].data);
        }
        return Promise.reject({ message: 'Server Error with 500!' });
    }
);

export const getData = (url, params = {}) => _instance.get(url, { params });

export const postData = (url, params = {}) => _instance.post(url, params);

export {
    _instance
};