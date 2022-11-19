import React from "react";

import * as S from "./styles";

const Button = ({
  onClick,
  bgColor = "#9448BC",
  children = "Children",
  disable,
  width = "100%",
  loading,
  typeLoading = "bubbles",
  color = "#9448BC",
  type,
  ...restProps
}) => {
  const textButton = loading ? "" : children;
  return (
    <S.ButtonElement
      onClick={onClick}
      bgColor={bgColor}
      disabled={disable}
      width={width}
      loading={`${loading}`}
      type={type}
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