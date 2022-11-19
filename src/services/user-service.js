import { getService, postService } from "./api";

export const getUser = async () => {
  const response = await getService("user");
  return response;
};

export const registerUser = async (user) => {
  const response = await postService("user", {
    ...user
  });
  return response;
};

export const isAuthenticated = async () => {
  const response = await getService("user");
  return response?.detail ? false : true;
};