import React from "react";

import * as S from "./styles";

const Input = ({
  id,
  type = "text",
  onChange,
  placeholder = "Digite aqui...",
  value,
  label = "label",
  width = "100%",
  bgColor = "#9448BC",
  labelColor = "#480355",
  ...rest
}) => (
  <S.InputContainer {...rest}>
    <S.InputLabel htmlFor={id}>{label}</S.InputLabel>
    <S.InputElement
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      width={width}
      bgColor={bgColor}
      labelColor={labelColor}
      placeholder={placeholder}
    />
  </S.InputContainer>
);

export { Input };
