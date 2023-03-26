import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import { Input } from "views/components";

import logoImage from "views/assets/icons/logo-purple.png";
import banksImage from "views/assets/images/banks-animation.png";

import { validationSchema } from "./validationSchema";
import { useLogin } from "./useLogin";

import * as S from "./styles";

const Login = () => {
  const { push } = useHistory();
  const { onSubmit, loginSchema } = useLogin();
  const { email, password } = loginSchema;

  return (
    <S.Body>
      <S.Left>
        <S.BanksImage src={banksImage} alt="bancos animação" />
        <S.Describe>
          Somos uma plataforma que consegue trazer os dados dos seus bancos e
          entregar uma forma com que você consiga gerenciar melhor essas
          informações.
        </S.Describe>
      </S.Left>
      <S.Right>
        <S.LogoContainer>
          <S.Logo src={logoImage} alt="logo balance" />
        </S.LogoContainer>

        <Formik
          initialValues={{
            [email.name]: "",
            [password.name]: "",
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {({ isSubmitting, setFieldValue, values, isValid, handleSubmit }) => (
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
              <S.ForgotPassword>
                Esqueceu sua senha?
                <S.ChangePassword isDisabled>Redefinir.</S.ChangePassword>
              </S.ForgotPassword>
              <S.ButtonWrapper>
                <S.LoginButton
                  disable={isSubmitting || !isValid}
                  loading={isSubmitting}
                  type="submit"
                  size="medium"
                  onClick={handleSubmit}
                >
                  Entrar
                </S.LoginButton>
              </S.ButtonWrapper>
            </S.BoxLogin>
          )}
        </Formik>

        <S.DontRegister>
          Ainda não tem cadastro?
          <S.Register onClick={() => push("/register")}>
            Cadastrar-se.
          </S.Register>
        </S.DontRegister>
      </S.Right>
    </S.Body>
  );
};

export { Login };
