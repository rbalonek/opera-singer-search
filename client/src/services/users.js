import api from "./api-config"

export const getAllUsers = async () => {
  const resp = await api.get('/users');
  return resp.data;
}

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`)
  return resp.data;
}