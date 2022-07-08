import axios from 'axios';

const HttpClient = axios.create({
  baseURL: 'https://api.github.com',
});

export default HttpClient;
