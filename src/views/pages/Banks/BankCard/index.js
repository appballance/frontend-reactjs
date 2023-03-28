import React from "react";

import { maskReal } from "infrastructure/utils";
import { banksMock } from "application/mocks";

import * as S from "./styles";

export const BankCard = ({ isView = true, balance, code, onClick = null }) => {
  const bank = banksMock?.find((bank) => bank.value === code);
  const balanceFormatted = isView ? maskReal(balance, true) : "*****";

  const hasClickFunction = typeof onClick === "function";

  return (
    <S.Container
      hasClickFunction={hasClickFunction}
      backgroundColor={bank?.color}
      onClick={(event) => {
        if (!hasClickFunction) return;

        onClick(event);
      }}
    >
      <S.Logo src={bank?.logoImage} />
      <S.ValueContainer isView={isView}>
        <S.ValueSymbol>R$</S.ValueSymbol>
        <S.Value>{balanceFormatted}</S.Value>
      </S.ValueContainer>
      <S.Title>{bank?.label}</S.Title>
    </S.Container>
  );
};
