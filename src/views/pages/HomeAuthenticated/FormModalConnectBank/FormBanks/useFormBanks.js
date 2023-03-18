import { CODE_BANK } from "application/constant";

export const useFormBanks = () => {
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

  const getCurrentBankStyle = (currentBankCode = null) => stylesBanks[currentBankCode];

  return {
    getCurrentBankStyle,
  };
};
