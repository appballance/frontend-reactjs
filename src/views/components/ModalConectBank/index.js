import React from "react";
import { Formik } from "formik";
import { Typography } from "@mui/material";

import { banksMock } from "application/mocks";
import { maskCpf } from "infrastructure/utils";
import { Input, Select } from "views/components";

import { useModalConectBank } from "./useModalConectBank";

import * as S from "./styles";

export const ModalConectBank = ({
  onSubmit,
  state,
  setState,
  stateCode,
  ...restProps
}) => {
  const { getCurrentBankStyle, initialValues } = useModalConectBank();

  return (
    <S.Container
      onClick={(e) => {
        e.stopPropagation();
        setState(false);
      }}
      {...restProps}
    >
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <Formik
          // validationSchema={validationSchema} // de acordo com o banco selecionado
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, isSubmitting, handleSubmit }) => (
            <S.FormModal>
              <Typography variant="h5">Conexão bancaria</Typography>

              {!stateCode && values?.bank?.value && (
                <Typography>
                  As informações abaixo é requisito do próprio banco selecionado
                  para a conexão.
                </Typography>
              )}

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

              <Input
                hide={getCurrentBankStyle(stateCode)?.hide || stateCode}
                name="cpf"
                label="CPF - Cadastrado no Banco"
                value={values["cpf"]}
                onChange={(e) => setFieldValue("cpf", maskCpf(e.target.value))}
              />
              <Input
                hide={getCurrentBankStyle(stateCode)?.hide || stateCode}
                name="password"
                label="Senha - Cadastrada no Banco"
                type="password"
                value={values["password"]}
                onChange={(e) => setFieldValue("password", e.target.value)}
              />

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
                onClick={handleSubmit}
              >
                Enviar
              </S.Button>
            </S.FormModal>
          )}
        </Formik>
      </S.Modal>
    </S.Container>
  );
};
