import { useState } from "react";
import { useHistory } from "react-router-dom";

import { useApp } from "../../application/context";
import { authenticateUser } from "../../services/auth";
import { loginSchema } from "./loginSchema";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({});

  const { showToastMessage } = useApp();

  const history = useHistory();

  const onClick = async () => {
    console.log("env1", process.env.NODE_ENV);
    console.log("env2", process.env.REACT_APP_BASE_URL);

    setLoading(true);
    const response = await authenticateUser(login.email, login.password);
    setLoading(false);

    if (!response?.token) {
      showToastMessage("Email ou senha incorreto", "msgError");
      return;
    }

    showToastMessage("Login realizado com sucesso");
    history.push("/");
    return;
  };

  return {
    loading,
    onClick,
    login,
    setLogin,
    loginSchema
  };
};
