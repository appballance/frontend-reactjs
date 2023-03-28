import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useApp } from "application/context";
import { getUser } from "infrastructure/services/user-service";

export const useBanks = () => {
  const [user, setUser] = useState({});
  const [userUpdated, setUserUpdate] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [connectBankModal, setConnectBankModal] = useState(false);

  const { showToastMessage } = useApp();
  const { push } = useHistory();

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
            push("/");
          }
          showToastMessage(error || "Erro na autenticação", "msgError");
          setLoading(false);
        });

      setUserUpdate(true);
    }
  }, [userUpdated]);

  const isUserWithoutBank = !user?.banks?.length && !isLoading;

  const isAvailableToConnect = isUserWithoutBank;

  const handleConnectBank = (ignoreAvailable = false) => {
    if (!isAvailableToConnect && !ignoreAvailable) return;

    setConnectBankModal(true);
  };

  const onCloseModalConnect = () => {
    if (!connectBankModal) return;

    setConnectBankModal(false);
  };

  return {
    user,
    isUserWithoutBank,
    isAvailableToConnect,
    handleConnectBank,
    connectBankModal,
    onCloseModalConnect,
  };
};
