import React from "react";

import * as S from "./styles";

const Button = ({
  onClick,
  bgColor = "#9448BC",
  children = "Children",
  disable,
  width = "100%",
  loading,
  type = "bubbles",
  color = "#9448BC",
  ...rest
}) => {
  const textButton = loading ? "" : children;
  return (
    <S.ButtonElement
      onClick={onClick}
      bgColor={bgColor}
      disabled={disable}
      width={width}
      loading={`${loading}`}
      {...rest}
    >
      {textButton}
      <S.ButtonLoading
        type={type}
        color={color}
        loading={`${loading}`}
        height={40}
        width={40}
      />
    </S.ButtonElement>
  );
};

export { Button };