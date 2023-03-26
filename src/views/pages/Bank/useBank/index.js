import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useApp } from "application/context";
import { bankMock, banksMock } from "application/mocks";
import { maskReal } from "infrastructure/utils";
import { useBankService } from "infrastructure/services/bank-service";

import income from "views/assets/icons/income.png";
import expense from "views/assets/icons/expense.png";

import * as S from "../styles";

export const useBank = (bankId) => {
  const [bank, setBank] = useState({});
  const [bankUpdated, setBankUpdated] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [isLoading, setLoading] = useState(true);

  const { push } = useHistory();
  const { showToastMessage } = useApp();
  const { getBank } = useBankService();

  const redirectToLogin = () => {
    push("/");
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
    push("/banks");
  };

  const headerContent = [
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

  const transactions = isLoading ? bankMock?.transactions : bank?.transactions;

  const rowsContent = transactions?.map((transaction) => [
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
        <>
          <S.RowIcon
            src={transaction?.type_transaction === "income" ? income : expense}
            alt="row.type_transaction"
          />
        </>
      ),
      style: { width: 160 },
      cellProps: { align: "center" },
    },
  ]);

  const bankTitle = banksMock?.find(({ value }) => value === bank?.code);

  return {
    page,
    setPage,
    isLoading,
    redirectHome,
    headerContent,
    rowsContent,
    bankTitle: bankTitle?.label,
  };
};
