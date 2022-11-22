import React from "react";
import { Formik } from "formik";

import { banksMock } from "application/mocks";
import { Input, Select } from "views/components";

import * as S from "../styles";

import { FormBanks } from "./FormBanks";

export const FormModalConnectBank = ({ stateCode, initialValues, onSubmit }) => (
  <Formik 
    // validationSchema={validationSchema} // de acordo com o banco selecionado
    initialValues={initialValues} 
    onSubmit={onSubmit}
  >
    {({ values, setFieldValue, isSubmitting }) => (
      <S.FormModal>
        {!stateCode && (
          <Select
            name="bank"
            label="Bancos disponíveis"
            placeholder="Selecione o banco..."
            options={banksMock}
            onChange={(e) => setFieldValue("bank", e)}
            isClearable
          />
        )}

        <FormBanks stateCode={stateCode} codeBank={values?.bank?.value} />

        {stateCode && (
          <S.AlertCodeSended>
            Alerta!
            <S.AlertContent>
              Porfavor verificar o código que enviamos para o seu email.
            </S.AlertContent>
          </S.AlertCodeSended>
        )}
        {stateCode && (
          <Input
            name="code"
            label="Código"
            onChange={(e) => setFieldValue("code", e.target.value)}
          />
        )}
        <S.Button
          disable={isSubmitting}
          loading={isSubmitting}
          type="submit"
        >
          Enviar
        </S.Button>
      </S.FormModal>
    )}
  </Formik>
);
