import axios from 'axios';
import { apiBaseUrl } from '@/environment/environment';

const config = {
  baseURL: apiBaseUrl
};
const httpClient = axios.create(config);
const authInterceptor = config => {
	// TODO: AUTH Interceptor
  return config;
};
const loggerInterceptor = config => {
	// TODO: LOGGER Interceptor
	return config;
};

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);
httpClient.interceptors.response.use(
  response => {
    return response;
  }, error => {
    return Promise.reject(error);
  }
);

export { httpClient };
