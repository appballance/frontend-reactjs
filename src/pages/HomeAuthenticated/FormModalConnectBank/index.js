import React from "react";

import { Input, Select } from "../../../components";

import * as S from "../styles";

export const FormModalConnectBank = ({
  setFormDataByKey,
  onSubmit,
  isSubmitting,
  stateCode,
  formData,
}) => (
  <S.FormModal>
    {!stateCode && (
      <Select label="Bancos disponíveis" placeholder="Em breve" isDisabled />
    )}
    {!stateCode && (
      <Input
        name="cpf"
        label="CPF"
        value={formData.cpf}
        onChange={(e) => {
          setFormDataByKey("cpf", e.target.value);
        }}
      />
    )}
    {!stateCode && (
      <Input
        name="password"
        label="Senha"
        type="password"
        value={formData.password}
        onChange={(e) => {
          setFormDataByKey("password", e.target.value);
        }}
      />
    )}
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
        value={formData.code}
        onChange={(e) => {
          setFormDataByKey("code", e.target.value);
        }}
      />
    )}
    <S.Button
      disable={isSubmitting}
      loading={isSubmitting}
      onClick={(e) => {
        e.stopPropagation();
        onSubmit(formData);
      }}
    >
      Enviar
    </S.Button>
  </S.FormModal>
);
