import React, { useCallback } from "react";

import { CODE_BANK } from "application/mocks";

import { Nubank } from "./Nubank";

export const FormBanks = ({ codeBank = null, stateCode }) => {
  const formBanks = {
    [CODE_BANK.NUBANK]: useCallback(() => <Nubank stateCode={stateCode} />, []),
    [CODE_BANK.BRAZIL_BANK]: useCallback(() => <></>, []),
    [CODE_BANK.PICPAY]: useCallback(() => <></>, []),
    [null]: useCallback(() => <></>, []),
  };
  const FormBankComponent = formBanks[codeBank];

  return <FormBankComponent />;
};
