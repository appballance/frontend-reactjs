import React from "react";
import { useFormikContext } from "formik";

import { Input } from "views/components";

import { useFormBanks } from "./useFormBanks";

export const FormBanks = ({ codeBank = null, stateCode }) => {
  const { setFieldValue, values } = useFormikContext();
  const { getCurrentBankStyle } = useFormBanks();

  return (
    <>
      <Input
        hide={getCurrentBankStyle(codeBank)?.hide || stateCode}
        name="cpf"
        label="CPF"
        value={values["cpf"]}
        onChange={(e) => setFieldValue("cpf", e.target.value)}
      />
      <Input
        hide={getCurrentBankStyle(codeBank)?.hide || stateCode}
        name="password"
        label="Senha"
        type="password"
        value={values["password"]}
        onChange={(e) => setFieldValue("password", e.target.value)}
      />
    </>
  );
};
