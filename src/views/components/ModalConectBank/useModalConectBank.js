import { CODE_BANK } from "application/constant";

export const useModalConectBank = () => {
  const stylesBanks = {
    [CODE_BANK.NUBANK]: {
      hide: false,
    },
    [CODE_BANK.BRAZIL_BANK]: {
      hide: true,
    },
    [CODE_BANK.PICPAY]: {
      hide: true,
    },
    [null]: {
      hide: true,
    },
  };

  const getCurrentBankStyle = (currentBankCode = null) =>
    stylesBanks[currentBankCode];

  const initialValues = {
    cpf: "",
    password: "",
    code: "",
    bank: null,
  };

  return {
    getCurrentBankStyle,
    initialValues,
  };
};
