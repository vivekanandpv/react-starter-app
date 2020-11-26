import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://reqres.in/api/',
  timeout: 1000,
  headers: { 'X-Base-Header': 'setting in http client' },
});
