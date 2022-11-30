import axios, {AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios';
import { TOKEN_DEFAULT } from '../const';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create ({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers[TOKEN_DEFAULT] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      const ShownErrors = [
        StatusCodes.BAD_REQUEST,
        StatusCodes.UNAUTHORIZED,
        StatusCodes.NOT_FOUND
      ];

      if (error.response && ShownErrors.includes(error.response.status)) {
        toast.warn(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};
