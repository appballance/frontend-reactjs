import React from "react";

import * as S from "./styles";

const Input = ({
  id,
  name,
  type = "text",
  onChange,
  label = "",
  value,
  width = "100%",
  ...rest
}) => (
  <S.InputContainer {...rest}>
    {!!value?.length && <S.InputLabel htmlFor={id}>{label}</S.InputLabel>}
    <S.InputElement
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      width={width}
      label={label}
    />
  </S.InputContainer>
);

export { Input };
