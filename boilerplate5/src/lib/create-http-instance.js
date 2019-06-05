import axios from 'axios';

/**
 * create an axios instance
 * @param {{
 *   baseURL?: string,
 *   timeout?: number,
 *   retry?: number,
 *   retryDelay? number,
 * }} option instance config option
 */
const createInstance = option => {
  const instance = axios.create({
    baseURL: option.baseURL,
    timeout: option.timeout === undefined ? 10000 : option.timeout,
    retry: option.retry || 2,
    retryDelay: option.retryDelay || 1000
  });
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    error => {
      const { config } = error;
      if (!config || !config.retry) {
        return Promise.reject(error);
      }
      config._retry = config._retry || 0;
      if (config._retry >= config.retry) {
        return Promise.reject(error);
      }

      config._retry += 1;

      return new Promise(resolve => {
        setTimeout(resolve, config.retryDelay);
      }).then(() => instance(config));
    }
  );

  return instance;
};

export default createInstance;
