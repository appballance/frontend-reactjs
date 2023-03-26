import * as React from "react";

import {
  Skeleton,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableRow,
} from "@mui/material";

import { Row } from "./Row";
import { Header } from "./Header";
import { Pagination } from "./Pagination";

import * as S from "./styles";

export const CustomTable = ({
  isLoading,
  title,
  headerContent,
  rowsContent,
  page = 0,
  setPage,
  restProps,
  hasPagination = false,
  rowSkeleton = 10,
  titleOnClick = false,
}) => {
  const getRows = (data = []) =>
    isLoading ? data?.slice(0, rowSkeleton) : data;

  return (
    <TableContainer {...restProps}>
      <S.Title
        onClick={() => {
          if (titleOnClick) {
            titleOnClick();
          }
        }}
        hasRedirect={!!titleOnClick}
      >
        {isLoading ? <Skeleton variant="text" width={250} /> : title}
      </S.Title>

      <Table>
        <Header row={headerContent} isLoading={isLoading} />
        <TableBody>
          {getRows(rowsContent)?.map((rowContent, index) => (
            <Row key={index} row={rowContent} isLoading={isLoading} />
          ))}
        </TableBody>
      </Table>

      {hasPagination && (
        <TableFooter>
          <TableRow>
            <Pagination
              count={rowsContent?.length}
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
