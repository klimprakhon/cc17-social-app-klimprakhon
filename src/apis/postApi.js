import axios from "./axios.config";

export const getAllPosts = async () => {
  return await axios.get("/posts");
};

export const getPostById = async (id) => {
  return await axios.get(`/posts/${id}`);
};

export const deletePost = async (id) => {
  return await axios.delete(`/posts/${id}`);
};

export const createPost = async (data) => {
  return await axios.post("/posts", data);
};

export const updatePost = async (updateData) => {
  return await axios.patch(`/post/${id}`, updateData);
};
