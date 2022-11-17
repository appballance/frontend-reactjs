import { postService } from "./api";

export const sendCodeByEmailNubank = async (data) => {
  const response = await postService("nubank/send-email-code", {
    ...data,
    device_id:  window.navigator.platform,
  });
  return response;
};

export const authNubank = async (code_id) => {
  const response = await postService(`nubank/auth/${code_id}`);
  return response;
};
