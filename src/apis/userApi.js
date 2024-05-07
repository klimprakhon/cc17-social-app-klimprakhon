import axios from "./axios.config";

export const getUserById = async () => {
  return await axios.get(`/users/${id}`);
};
