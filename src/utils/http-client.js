import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  timeout: 1000,
  headers: { 'X-Base-Header': 'setting in http client' },
});
