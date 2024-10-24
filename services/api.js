// /services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-vagas-lccopper.vercel.app/', // Certifique-se de que o backend Express está rodando na porta 3006
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
