import { getService, postService } from "./api";

export const authenticateUser = async (email, password) => {
  const response = await postService("auth", {
    email: email,
    password: password,
  });

  if (!response?.token) {
    return;
  }

  localStorage.setItem("token", response?.token);
  return response;
};

export const isAuthenticated = async () => {
  const response = await getService("user");
  return response?.detail ? false : true;
};
