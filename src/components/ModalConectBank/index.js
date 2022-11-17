import React from "react";

import * as S from "./styles";

export const ModalConectBank = ({
  state,
  setState,
  formContent,
  ...restProps
}) => (
  <S.MainContent
    onClick={(e) => {
      e.stopPropagation();
      setState(false);
    }}
    {...restProps}
  >
    <S.Modal onClick={(e) => e.stopPropagation()}>
      <S.Form>{formContent}</S.Form>
    </S.Modal>
  </S.MainContent>
);
