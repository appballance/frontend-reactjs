import React from "react";
import { TableCell, TableRow, Skeleton, TableHead } from "@mui/material";

export const Header = ({ row, isLoading }) => {
  const CustomCell = ({
    children,
    typeSkeleton = "text",
    widthSkeleton = "",
    ...restProps
  }) => (
    <TableCell {...restProps}>
      {isLoading && children ? (
        <Skeleton variant={typeSkeleton} width={widthSkeleton} />
      ) : (
        children
      )}
    </TableCell>
  );

  return (
    <TableHead>
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
    </TableHead>
  );
};
