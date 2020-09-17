import api from "./api-config"

export const getAllOperas = async () => {
  const resp = await api.get('/operas');
  return resp.data;
}

export const getOneOpera = async (id) => {
  const resp = await api.get(`/operas/${id}`)
  return resp.data;
}

export const operaSearch = async (query) => {
  const resp = api.get(`/operas/search?name=${query}`)
  return resp.data;
}