import * as React from "react";
import { useHistory } from "react-router-dom";

import { Table, TableBody, TableContainer } from "@mui/material";

import { banksMock } from "application/mocks";

import { Row } from "./Row";

import * as S from "./styles";

export const CustomTable = ({ bank }) => {
  const history = useHistory();

  const getRows = (data = []) => data;

  const responseBankTitle = banksMock?.find(
    ({ value }) => value === bank?.code
  );

  const redirectToBankDetails = () => {
    history.push("/bank", {
      entity_id: bank.entity_id,
    });
  };

  return (
    <TableContainer>
      <S.Title onClick={redirectToBankDetails}>
        {responseBankTitle.label}
      </S.Title>
      <Table sx={{ minWidth: 300 }}>
        <TableBody>
          {getRows(bank.transactions)?.map((transaction) => (
            <Row key={transaction?.address} {...transaction} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
