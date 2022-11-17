import { useState } from "react";
import { useHistory } from "react-router-dom";

import { authenticateUser } from "../../services/auth";

export const useLogin = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
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
      children: "Entrar",
    },
    error: {
      message: "Error message",
      show: false,
    },
  });

  const onClick = async () => {
    setLoading(true);

    const response = await authenticateUser(login.email, login.password);

    setLoading(false);

    if (!response?.token) {
      setConfigLogin({
        ...configLogin,
        error: { message: response?.detail, show: true },
      });
      setTimeout(() => {
        setConfigLogin({ ...configLogin, error: { show: false } });
      }, 5000);
      return;
    }

    history.push("/");
    setConfigLogin({
      ...configLogin,
      error: { message: "logged with success!", show: true },
    });

    setTimeout(() => {
      setConfigLogin({ ...configLogin, error: { show: false } });
    }, 5000);
    return;
  };

  return {
    loading,
    setLoading,
    configLogin,
    setConfigLogin,
    onClick,
    login,
    setLogin,
  };
};
