import api from './api-config';

export const getAllBlogs = async () => {
  const resp = await api.get('/blogs');
  return resp.data;
}

export const getOneBlog = async (id) => {
  const resp = await api.get(`/blogs/${id}`);
  return resp.data;
}

export const postBlog = async (formData) => {
  const resp = await api.post('/blogs', { blog: formData });
  return resp.data;
}

export const putBlog = async (id, formData) => {
  const resp = await api.put(`/blogs/${id}`, formData);
  return resp.data;
}

export const deleteBlog = async (id) => {
  const resp = await api.delete(`/blogs/${id}`);
  return resp.data;
}

export const getAllUserBlogs = async (id) => {
  const resp = await api.get(`/blogs/user/${id}`);
  return resp.data;
}