import axios from 'axios';

const eventFetch = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
  },
});

export default eventFetch;
