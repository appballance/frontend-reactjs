import React from "react";

import { Input } from "../../components";

import { useLogin } from "./useLogin";

import * as S from "./styles";

const Login = () => {
  const { loading, onClick, login, setLogin, loginSchema } = useLogin();
  const { email, password } = loginSchema;

  return (
    <S.Body>
      <S.Left>
        <S.GoBackDesktop path="/" title="Voltar" />
      </S.Left>
      <S.Right>
        <S.GoBackMobile path="/" title="Voltar" isBlack />

        <S.Box>
          <S.BoxLogin>
            <Input
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              label={email.label}
              placeholder={email.placeHolder}
            />
            <Input
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              label={password.label}
              placeholder={password.placeHolder}
              type="password"
            />
            <S.LoginButton loading={loading} onClick={onClick}>
              Entrar
            </S.LoginButton>
          </S.BoxLogin>
        </S.Box>
      </S.Right>
    </S.Body>
  );
};

export { Login };
