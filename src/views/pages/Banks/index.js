import React from "react";
import { useHistory } from "react-router-dom";

import { Balance } from "views/components/modules";
import { ModalConectBank } from "views/components";

import { useBanks } from "./useBanks";
import { BankCard } from "./BankCard";

import addBankImage from "views/assets/icons/add.png";

import * as S from "./styles";

export const Banks = () => {
  const {
    user,
    isUserWithoutBank,
    isAvailableToConnect,
    handleConnectBank,
    connectBankModal,
    onCloseModalConnect,
  } = useBanks();

  const history = useHistory();

  return (
    <Balance>
      <S.HomeContainer>
        <S.Title>
          <S.TitleHello>Olá,</S.TitleHello>
          <S.TitleSurname>{user?.surname}</S.TitleSurname>
        </S.Title>

        <S.BalanceCard value={user?.balance} />

        <S.TableContainer
          isEmpty={isUserWithoutBank}
          isAvailableToConnect={isAvailableToConnect}
          handleConnectBank={handleConnectBank}
        >
          {user?.banks?.map(({ code, balance, entity_id }, index) => {
            const redirectToBank = () => {
              history.push("/bank", {
                bankId: entity_id,
              });
            };

            return (
              <BankCard
                key={index}
                balance={balance}
                code={code}
                onClick={redirectToBank}
              />
            );
          })}
          <S.CardAddBank onClick={() => handleConnectBank(true)}>
            <S.CardAddBankImage src={addBankImage} />
            <S.CardAddBankTitle>Novo banco</S.CardAddBankTitle>
          </S.CardAddBank>
        </S.TableContainer>
      </S.HomeContainer>

      {connectBankModal && <ModalConectBank onClose={onCloseModalConnect} />}
    </Balance>
  );
};
