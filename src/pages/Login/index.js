import { useState } from "react";

import * as S from "./styles";

import { Input } from "../../components/Input";
import { Notification } from "../../components/notification";

import { authenticate } from "../../services/auth";

const Login = () => {

  const [configLogin, setConfigLogin] = useState({
    email: {
      label: "Email",
      placeHolder: "Digite seu email...",
    },
    password: {
      label: "Senha",
      placeHolder: "Digite sua senha...",
    },
    button: {
      children: "Entrar"
    },
    error: {
      message: "Error message",
      show: false,
    }
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onClick = async () => {

    setLoading(true);

    const response = await authenticate(login.email, login.password);

    setLoading(false);

    if(!response?.token) {

      setConfigLogin({ ...configLogin, error: { message: response?.detail, show: true }})
      setTimeout(() => {
        setConfigLogin({ ...configLogin, error: { show: false }})
      }, 5000);
      return;
    }

    setConfigLogin({ ...configLogin, error: { message: "logged with success!", show: true }})

    setTimeout(() => {
      setConfigLogin({ ...configLogin, error: { show: false }})
    }, 5000);
    return;
  }

  return (
    <S.Body>
      <Notification show={configLogin.error.show} children={configLogin.error.message}/>
      <S.Left>
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
          />
          <S.LoginButton loading={loading}
            children={configLogin.button.children} 
            onClick={onClick}
          />
        </S.BoxLogin>
      </S.Left>
      <S.Right>
      </S.Right>
    </S.Body>
  );
}

export { Login };