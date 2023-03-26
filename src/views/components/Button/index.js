import React from "react";

import * as S from "./styles";

const Button = ({
  onClick = () => {},
  bgColor = "#9448BC",
  children = "Children",
  disable,
  loading,
  typeLoading = "bubbles",
  color = "#9448BC",
  // variant,
  size = "small",
  ...restProps
}) => {
  const textButton = loading ? "" : children;
  return (
    <S.ButtonElement
      onClick={onClick}
      bgColor={bgColor}
      disabled={disable}
      loading={`${loading}`}
      // variant={variant}
      size={size}
      {...restProps}
    >
      {textButton}
      <S.ButtonLoading
        type={typeLoading}
        color={color}
        loading={`${loading}`}
        height={40}
        width={40}
      />
    </S.ButtonElement>
  );
};

export { Button };
