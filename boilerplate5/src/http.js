import createInstance from './lib/create-http-instance';

const instance = createInstance({
  baseURL: '',
  timeout: 5000,
});

export const delayStep = (step) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(step);
  }, 200);
});

export const getUser = id => instance.get(`/user/${id}`);
