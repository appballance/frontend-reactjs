import { postService } from "./api";

export const sendCodeByEmailNubank = async (payload) => {
  const response = await postService("nubank/send-email-code", payload);
  return response;
};

export const authNubank = async (payload) => {
  const response = await postService("nubank/auth", payload);
  return response;
};
