import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useApp } from "application/context";

import { useBankService } from "infrastructure/services/bank-service";

export const useBank = (bankId) => {
  const [bank, setBank] = useState({});
  const [bankUpdated, setBankUpdated] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [isLoading, setLoading] = useState(true);

  const history = useHistory();
  const { showToastMessage } = useApp();
  const { getBank } = useBankService();

  const redirectToLogin = () => {
    history.push("/login");
  };

  useEffect(() => {
    if (!bankUpdated && !!bankId) {
      setLoading(true);

      getBank(bankId, page, perPage)
        .then((response) => {
          setBank(response);
          setLoading(false);
        })
        .catch((error) => {
          showToastMessage(
            error?.response?.data?.detail || "Erro na autenticação",
            "msgError"
          );
          if (error?.response?.data?.detail === "Signature has expired") {
            console.log(
              "error?.response?.data?.detail",
              error?.response?.data?.detail
            );
            redirectToLogin();
          }
          setLoading(false);
        });

      setBankUpdated(true);
    }
  }, [bankUpdated]);

  useEffect(() => {
    if (bankUpdated) {
      setBankUpdated(false);
    }
  }, [page]);

  const redirectHome = () => {
    history.push("/balance");
  };

  return {
    bank,
    page,
    setPage,
    isLoading,
    redirectHome,
  };
};
