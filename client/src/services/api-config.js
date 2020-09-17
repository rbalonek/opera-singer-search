import axios from 'axios';

const baseUrl = 'http://localhost:3000' // This will be the HEROKU app eventually.

const api = axios.create({
  baseURL: baseUrl
})

export default api;