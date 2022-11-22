import React from "react";
import { useFormikContext } from "formik";

import { Input } from "views/components";

export const Nubank = ({ stateCode }) => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <>
      {!stateCode && (
        <Input
          name="cpf"
          label="CPF"
          value={values["cpf"]}
          onChange={(e) => setFieldValue("cpf", e.target.value)}
        />
      )}
      {!stateCode && (
        <Input
          name="password"
          label="Senha"
          type="password"
          value={values["password"]}
          onChange={(e) => setFieldValue("password", e.target.value)}
        />
      )}
    </>
  );
};
