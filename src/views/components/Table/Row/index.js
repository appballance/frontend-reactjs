import React from "react";

import { TableCell, TableRow } from "@mui/material";

import income from "views/assets/icons/income.png";
import expense from "views/assets/icons/expense.png";

import * as S from "../styles";

export const Row = ({ address, amount, type_payment, type_transaction }) => {
  console.log("");

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {address}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {amount}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        {type_payment}
      </TableCell>
      <TableCell style={{ width: 160 }} align="right">
        <S.RowIcon
          src={type_transaction === "income" ? income : expense}
          alt="row.type_transaction"
        />
      </TableCell>
    </TableRow>
  );
};
