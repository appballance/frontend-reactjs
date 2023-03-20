import React from "react";
import { TableCell, TableRow, Skeleton } from "@mui/material";

export const Row = ({ isLoading, row }) => {
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
      {row?.map((column) => (
        <CustomCell
          key={column.key}
          style={column?.style || {}}
          {...(column?.cellProps || {})}
        >
          {column.content}
        </CustomCell>
      ))}
    </TableRow>
  );
};
