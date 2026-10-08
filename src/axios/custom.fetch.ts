import axios from 'axios';

const customFetch = axios.create({
  baseURL: '/',
  withCredentials: true,
  withXSRFToken: true,
});

export default customFetch;
