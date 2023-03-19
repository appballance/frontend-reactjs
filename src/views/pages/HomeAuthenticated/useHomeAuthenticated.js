import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useApp } from "application/context";
import { getUser } from "infrastructure/services/user-service";

export const useHomeAuthenticated = () => {
  const [user, setUser] = useState({});
  const [userUpdated, setUserUpdate] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const { showToastMessage } = useApp();

  const history = useHistory();

  useEffect(() => {
    if (!userUpdated) {
      setLoading(true);

      getUser()
        .then((response) => {
          setUser(response);
          setLoading(false);
        })
        .catch((error) => {
          if (error?.response?.data?.detail === "Signature has expired") {
            history.push("/login");
          }
          showToastMessage(error || "Erro na autenticação", "msgError");
          setLoading(false);
        });

      setUserUpdate(true);
    }
  }, [userUpdated]);

  return {
    user,
    isLoading,
  };
};
