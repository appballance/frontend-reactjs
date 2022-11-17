import { getService } from "./api";

export const getUser = async () => {
  const response = await getService("user");
  return response;
};
