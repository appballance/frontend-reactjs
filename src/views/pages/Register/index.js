import React from "react";

import { Input } from "../../components";

import { useRegister } from "./useRegister";

import * as S from "./styles";

export const Register = () => {
  const { onSubmit, registerSchema, getFieldDefaultProps, isSubmitting } =
    useRegister();

  const { surname, fullname, email, password1, password2 } = registerSchema;

  return (
    <S.RegisterContent>
      <S.GoBack path="/" title="Voltar" />

      <S.Form>
        <S.Title>Cadastro</S.Title>

        <Input {...getFieldDefaultProps(surname.name)} />
        <Input {...getFieldDefaultProps(fullname.name)} />
        <Input {...getFieldDefaultProps(email.name)} />
        <Input {...getFieldDefaultProps(password1.name)} type="password" />
        <Input {...getFieldDefaultProps(password2.name)} type="password" />
      </S.Form>
      <S.RegisterButton loading={isSubmitting} onClick={onSubmit}>
        Cadastrar
      </S.RegisterButton>
    </S.RegisterContent>
  );
};
