import axios from 'axios';

const HttpClient = axios.create({
  baseURL: 'https://api.github.com/users',
});

export default HttpClient;
