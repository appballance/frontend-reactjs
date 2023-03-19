import * as React from "react";
import { useHistory } from "react-router-dom";

import {
  Skeleton,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableRow,
} from "@mui/material";

import { banksMock, bankMock } from "application/mocks";

import { Row } from "./Row";
import { Pagination } from "./Pagination";

import * as S from "./styles";

export const CustomTable = ({
  isLoading,
  bank,
  page = 0,
  setPage,
  restProps,
  hasPagination = false,
  rowSkeleton = 10,
  hasRedirect = false,
}) => {
  const history = useHistory();

  const getRows = (data = []) => data;

  const responseBankTitle = banksMock?.find(
    ({ value }) => value === bank?.code
  );

  const redirectToBankDetails = () => {
    if (hasRedirect) {
      history.push("/bank", {
        bankId: bank.entity_id,
      });
    }
  };

  const rows = getRows(
    isLoading
      ? bankMock?.transactions?.slice(0, rowSkeleton)
      : bank?.transactions
  );

  return (
    <TableContainer {...restProps}>
      <S.Title onClick={redirectToBankDetails} hasRedirect={hasRedirect}>
        {isLoading ? (
          <Skeleton variant="text" width={250} />
        ) : (
          responseBankTitle?.label
        )}
      </S.Title>
      <Table>
        <TableBody>
          {rows?.map((transaction, index) => (
            <Row key={index} isLoading={isLoading} {...transaction} />
          ))}
        </TableBody>
      </Table>

      {hasPagination && (
        <TableFooter>
          <TableRow>
            <Pagination
              count={rows?.length}
              isLoading={isLoading}
              page={page}
              onPageChange={(page) => {
                setPage(page);
              }}
            />
          </TableRow>
        </TableFooter>
      )}
    </TableContainer>
  );
};
