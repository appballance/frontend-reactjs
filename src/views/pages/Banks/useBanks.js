import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { banksMock } from "application/mocks";
import { maskReal } from "infrastructure/utils";
import { useApp } from "application/context";
import { getUser } from "infrastructure/services/user-service";

import income from "views/assets/icons/income.png";
import expense from "views/assets/icons/expense.png";

import * as S from "./styles";

export const useBanks = () => {
  const [user, setUser] = useState({});
  const [userUpdated, setUserUpdate] = useState(false);
  const [isLoading, setLoading] = useState(true);

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

  const headerContent = () => [
    {
      key: "address",
      content: "Nome",
      style: { width: 160 },
      cellProps: { component: "th", scope: "row" },
    },
    {
      key: "amount",
      content: "Valor",
      style: { width: 160 },
      cellProps: { align: "center" },
    },
    {
      key: "typePayment",
      content: "Tipo de pagamento",
      style: { width: 160 },
      cellProps: { align: "center" },
    },
    {
      title: "typeTransaction",
      content: "",
      style: { width: 160 },
      cellProps: { align: "center" },
    },
  ];

  const rowsContent = (bank) =>
    bank?.transactions?.map((transaction) => [
      {
        key: "address",
        content: <>{transaction?.address}</>,
        style: { width: 160 },
        cellProps: { component: "th", scope: "row" },
      },
      {
        key: "amount",
        content: <>{maskReal(transaction?.amount)}</>,
        style: { width: 160 },
        cellProps: { align: "center" },
      },
      {
        key: "typePayment",
        content: <>{transaction?.type_payment}</>,
        style: { width: 160 },
        cellProps: { align: "center" },
      },
      {
        key: "typeTransaction",
        content: (
          <S.RowIcon
            src={transaction?.type_transaction === "income" ? income : expense}
            alt="row.type_transaction"
          />
        ),
        style: { width: 160 },
        cellProps: { align: "center" },
      },
    ]);

  const bankTitle = (bank) =>
    banksMock?.find(({ value }) => value === bank?.code);

  return {
    user,
    isLoading,
    headerContent,
    rowsContent,
    bankTitle: (bank) => bankTitle(bank)?.label,
  };
};
