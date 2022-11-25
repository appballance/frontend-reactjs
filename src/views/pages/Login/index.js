import React from "react";
import { Formik } from "formik";

import { Input } from "views/components"

import { validationSchema } from "./validationSchema";
import { useLogin } from "./useLogin";

import * as S from "./styles";

const Login = () => {
  const { onSubmit, loginSchema } = useLogin();
  const { email, password } = loginSchema;

  return (
    <S.Body>
      <S.Left>
        <S.GoBackDesktop path="/" title="Voltar" />
      </S.Left>
      <S.Right>
        <S.GoBackMobile path="/" title="Voltar" isBlack />

        <Formik
          initialValues={{
            [email.name]: "",
            [password.name]: "",
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <S.Box>
              <S.BoxLogin>
                <Input
                  value={values[email.name]}
                  onChange={(e) => setFieldValue(email.name, e.target.value)}
                  label={email.label}
                  placeholder={email.placeHolder}
                />
                <Input
                  value={values[password.name]}
                  onChange={(e) => setFieldValue(password.name, e.target.value)}
                  label={password.label}
                  placeholder={password.placeHolder}
                  type="password"
                />
                <S.LoginButton
                  disable={isSubmitting}
                  loading={isSubmitting}
                  type="submit"
                >
                  Entrar
                </S.LoginButton>
              </S.BoxLogin>
            </S.Box>
          )}
        </Formik>
      </S.Right>
    </S.Body>
  );
};

export { Login };
