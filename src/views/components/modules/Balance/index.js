import React from "react";

import { Main, ModalConectBank } from "../../../components";

import { useBalance } from "./useBalance";
import { FormModalConnectBank } from "../../../components/ModalConectBank/FormModalConnectBank";

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
    initialValues,
  } = useBalance();

  return (
    <S.HomeContainer>
      <S.Left>
        <Main
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
          formContent={
            <FormModalConnectBank
              onSubmit={onSubmit}
              stateCode={stateCode}
              initialValues={initialValues}
            />
          }
        />
      )}
    </S.HomeContainer>
  );
};

export { Balance };
