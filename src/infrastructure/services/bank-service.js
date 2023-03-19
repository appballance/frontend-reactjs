import { getService, postService } from "./api";

export const useBankService = () => {
  const getBank = async (bankId, page, perPage) => {
    const response = await getService(
      `bank/${bankId}?page=${page}&per_page=${perPage}`
    );
    return response;
  };

  return {
    getBank,
  };
};

export const sendCodeByEmailNubank = async (payload) => {
  const response = await postService("nubank/send-email-code", payload);
  return response;
};

export const authNubank = async (payload) => {
  const response = await postService("nubank/auth", payload);
  return response;
};
