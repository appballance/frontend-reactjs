import React from "react";

import { TableCell, TableRow, Skeleton } from "@mui/material";

import income from "views/assets/icons/income.png";
import expense from "views/assets/icons/expense.png";

import * as S from "../styles";

export const Row = ({
  isLoading,
  address,
  amount,
  type_payment,
  type_transaction,
}) => {
  console.log("");

  const CustomCell = ({
    children,
    typeSkeleton = "text",
    widthSkeleton = "",
    ...restProps
  }) => (
    <TableCell {...restProps}>
      {isLoading ? (
        <Skeleton variant={typeSkeleton} width={widthSkeleton} />
      ) : (
        children
      )}
    </TableCell>
  );

  return (
    <TableRow>
      <CustomCell component="th" scope="row">
        {address}
      </CustomCell>
      <CustomCell style={{ width: 160 }} align="right">
        {amount}
      </CustomCell>
      <CustomCell style={{ width: 160 }} align="right">
        {type_payment}
      </CustomCell>
      <CustomCell style={{ width: 160 }} align="right">
        <S.RowIcon
          src={type_transaction === "income" ? income : expense}
          alt="row.type_transaction"
        />
      </CustomCell>
    </TableRow>
  );
};
