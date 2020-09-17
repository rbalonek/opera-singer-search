import api from "./api-config";

export const getAllRoles = async () => {
  const resp = await api.get("/roles");
  return resp.data;
};

export const getAllRolesInOpera = async (opera_id) => {
  const resp = await api.get(`operas/${opera_id}`);
  return resp.data;
};

export const getOneRole = async (id) => {
  const resp = await api.get(`/roles/${id}`);
  return resp.data;
};

export const putRole = async (id, formData) => {
  const resp = await api.put(`/roles/${id}`, { role: formData });
  return resp.data;
};

export const postRole = async (formData) => {
  const resp = await api.post("/roles", { role: formData });
  return resp.data;
};

export const deleteRole = async (id) => {
  const resp = await api.delete(`/roles/${id}`);
  return resp.data;
};

export const addRole = async ( RoleId ) => {
  const resp = await api.post(`/users/roles/${RoleId}`);
  return resp.data;
};

export const showRolesForUser = async ( userId ) => {
  const resp = await api.get(`/roles/user/${userId}`);
};