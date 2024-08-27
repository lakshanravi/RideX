// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api', // Adjust according to your backend URL
});

export default api;
