// /services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-vagas-lccopper-nvrfqlz9q-marco-antonios-projects-796d869d.vercel.app/', // Certifique-se de que o backend Express está rodando na porta 3006
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
