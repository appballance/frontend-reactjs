import React from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

import goBackBlack from "../../assets/icons/go-back.png";
import goBackWhite from "../../assets/icons/go-back-white.png";

export const GoBack = ({
  title = "",
  onClick = null,
  isBlack = false,
  path = "/",
  ...restProps
}) => {
  const history = useHistory();

  const goBackImage = isBlack ? goBackBlack : goBackWhite;

  const onClickHistory = (e) => {
    history.push(path);
    e.stopPropagation();
  };

  const onClickFunction = onClick ? onClick : onClickHistory;

  return (
    <S.GoBackContent onClick={onClickFunction} {...restProps}>
      <S.GoBackImage src={goBackImage} alt="Voltar" />
      <S.GoBackTitle isBlack={isBlack}>{title}</S.GoBackTitle>
    </S.GoBackContent>
  );
};
