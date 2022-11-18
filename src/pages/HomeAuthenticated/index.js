import React from "react";

import { Main, ModalConectBank } from "../../components";
import { useHomeAuthenticated } from "./useHomeAuthenticated";
import { FormModalConnectBank } from "./FormModalConnectBank";

import * as S from "./styles";

const HomeAuthenticated = () => {
  const {
    user,
    listMain,
    stateMain,
    setStateMain,
    stateModal,
    setStateModal,
    setFormDataByKey,
    onSubmit,
    isSubmitting,
    stateCode,
    formData,
  } = useHomeAuthenticated();

  return (
    <S.HomeContainer>
      <Main listContent={listMain} state={stateMain} setState={setStateMain} />
      <S.Right state={stateMain}>
        <S.HomeTitle>{user?.surname}</S.HomeTitle>
      </S.Right>
      {stateModal && (
        <ModalConectBank
          state={stateModal}
          setState={setStateModal}
          formContent={
            <FormModalConnectBank
              setFormDataByKey={setFormDataByKey}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
              stateCode={stateCode}
              formData={formData}
            />
          }
        />
      )}
    </S.HomeContainer>
  );
};

export { HomeAuthenticated };
