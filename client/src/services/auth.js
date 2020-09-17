import api from './api-config';

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { authentication: loginData }) // loginData is username and password. Strong params wants it in "authentication" from authentication_controller.rb 
  localStorage.setItem('authToken', resp.data.token); ///This is the token for backend, send to local storage
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user //This is the user for backend, don't need token anymore.
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData }) //post request to /users but same bascally as loginUser
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return null
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null
}