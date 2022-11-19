import React from "react";

import { Input } from "../../components";

import { useRegister } from "./useRegister";

import * as S from "./styles";

export const Register = () => {
  const { data, onSubmit, registerSchema, getFieldDefaultProps, isSubmitting } =
    useRegister();

  const { surname, fullname, email, password1, password2 } = registerSchema;

  console.log("data", data);


  return (
    <S.RegisterContent>
      <S.GoBack path="/" title="Voltar" isBlack />

      <S.Form>
        <Input {...getFieldDefaultProps(surname.name)} />
        <Input {...getFieldDefaultProps(fullname.name)} />
        <Input {...getFieldDefaultProps(email.name)} />
        <Input {...getFieldDefaultProps(password1.name)} type="password" />
        <Input {...getFieldDefaultProps(password2.name)} type="password" />
        <S.RegisterButton loading={isSubmitting} onClick={onSubmit}>
          Finalizar Cadastro
        </S.RegisterButton>
      </S.Form>
    </S.RegisterContent>
  );
};
