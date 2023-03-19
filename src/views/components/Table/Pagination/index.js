import * as React from "react";

import { Box, IconButton, Skeleton } from "@mui/material";

import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from "@mui/icons-material";

export const Pagination = ({
  isLoading,
  count,
  page,
  onPageChange,
}) => {
  if (!count) {
    return null;
  }

  const handleFirstPageButtonClick = () => {
    if (isLoading) return;
    onPageChange(1);
  };

  const handleBackButtonClick = () => {
    if (isLoading) return;
    onPageChange(page - 1);
  };

  const handleNextButtonClick = () => {
    if (isLoading) return;
    onPageChange(page + 1);
  };

  const handleLastPageButtonClick = () => {
    if (isLoading) return;
    // onPageChange(lastPage); // added in backend the return
  };

  const CustomIconButton = ({
    children,
    typeSkeleton = "circular",
    ...restProps
  }) => (
    <IconButton {...restProps}>
      {isLoading ? (
        <Skeleton variant={typeSkeleton} width={25} height={25} />
      ) : (
        children
      )}
    </IconButton>
  );

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5, mt: 2.0 }}>
      <CustomIconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPage />
      </CustomIconButton>
      <CustomIconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </CustomIconButton>
      <CustomIconButton
        onClick={handleNextButtonClick}
        // disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </CustomIconButton>
      <CustomIconButton
        onClick={handleLastPageButtonClick}
        disabled
        // disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPage />
      </CustomIconButton>
    </Box>
  );
};
