import axios from 'axios';

const axiosPro = axios.create({
  baseURL: 'http://localhost:8080/',
});

export default axiosPro;
