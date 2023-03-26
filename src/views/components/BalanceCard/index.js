import React from "react";

import { maskReal } from "infrastructure/utils";

import eyesView from "views/assets/icons/eyes-view.png";
import eyesNowiew from "views/assets/icons/eyes-noview.png";

import * as S from "./styles";

export const BalanceCard = ({ value, isView = true, onClick = () => {} }) => {
  const eyes = isView ? eyesView : eyesNowiew;
  const valueFormatted = isView ? maskReal(value, true) : "*****";

  return (
    <S.Container>
      <S.Element isView={isView}>
        <S.Coin>R$</S.Coin>
        <S.Value>{valueFormatted}</S.Value>
      </S.Element>
      <S.Eyes src={eyes} onClick={onClick} />
    </S.Container>
  );
};
