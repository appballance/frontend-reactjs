import React from "react";

import { SideBar, ModalConectBank } from "../../../components";

import { useBalance } from "./useBalance";

import * as S from "./styles";

const Balance = ({ children }) => {
  const {
    listMain,
    stateMain,
    setStateMain,
    stateModal,
    setStateModal,
    onSubmit,
    stateCode,
  } = useBalance();

  return (
    <S.HomeContainer>
      <S.Left>
        <SideBar
          listContent={listMain}
          state={stateMain}
          setState={setStateMain}
        />
      </S.Left>
      <S.Right state={stateMain}>{children}</S.Right>
      {stateModal && (
        <ModalConectBank
          state={stateModal}
          setState={setStateModal}
          onSubmit={onSubmit}
          stateCode={stateCode}
        />
      )}
    </S.HomeContainer>
  );
};

export { Balance };
