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
    setLoading(true);
    const response = await authenticateUser(login.email, login.password);
    setLoading(false);

    if (!response?.token) {
      showToastMessage("Email ou senha incorreto", "msgError");
      return;
    }

    showToastMessage("Login realizado com sucesso");
    history.push("/home");
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
