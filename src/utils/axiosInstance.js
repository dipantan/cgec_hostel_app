import axios from 'axios';
import {fetchToken} from '../reducers/auth/selectors';

const axiosInstanceLogin = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${fetchToken()}`,
  },
});

export {axiosInstanceLogin, axiosInstance};
