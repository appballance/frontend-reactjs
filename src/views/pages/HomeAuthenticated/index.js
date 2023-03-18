import React from "react";

import { Main, ModalConectBank, Table } from "../../components";
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
    onSubmit,
    stateCode,
    initialValues,
  } = useHomeAuthenticated();

  return (
    <S.HomeContainer>
      <S.Left>
        <Main
          listContent={listMain}
          state={stateMain}
          setState={setStateMain}
        />
      </S.Left>
      <S.Right state={stateMain}>
        <S.HomeTitle>{user?.surname}</S.HomeTitle>

        <S.ContainerTables>
          {user?.banks?.map((bank) => (
            <Table bank={bank} key={bank.id} />
          ))}
        </S.ContainerTables>
      </S.Right>
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

export { HomeAuthenticated };
