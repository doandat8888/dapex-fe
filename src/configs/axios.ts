import axios from 'axios'
import { useAuthStore } from '../stores/useUserStore';

const authAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_USER_MGMT_URL,
})

export const baseAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_BACK_END_URL,
    withCredentials: true,
})

authAxios.interceptors.request.use(
    (config) => {
      const token = useAuthStore.getState().token
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

export { authAxios }