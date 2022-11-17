import React from "react";

import { Input, Notification } from "../../components";

import { useLogin } from "./useLogin";

import * as S from "./styles";

const Login = () => {
  const { loading, configLogin, onClick, login, setLogin } = useLogin();

  return (
    <S.Body>
      <Notification show={configLogin.error.show}>
        {configLogin.error.message}
      </Notification>
      <S.Left></S.Left>
      <S.Right>
        <S.BoxLogin>
          <Input
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            label={configLogin.email.label}
            placeholder={configLogin.email.placeHolder}
          />
          <Input
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            label={configLogin.password.label}
            placeholder={configLogin.password.placeHolder}
            type="password"
          />
          <S.LoginButton loading={loading} onClick={onClick}>
            {configLogin.button.children}
          </S.LoginButton>
        </S.BoxLogin>
      </S.Right>
    </S.Body>
  );
};

export { Login };
