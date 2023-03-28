import React from "react";
import { useHistory } from "react-router-dom";

import { Balance } from "views/components/modules";
import { ModalConectBank } from "views/components";

import { useBanks } from "./useBanks";
import { BankCard } from "./BankCard";

import addBankImage from "views/assets/icons/add.png";

import * as S from "./styles";
import { Skeleton } from "@mui/material";

export const Banks = () => {
  const {
    user,
    isUserWithoutBank,
    isAvailableToConnect,
    isAvailableToAddBank,
    handleConnectBank,
    handleViewBalance,
    connectBankModal,
    onCloseModalConnect,
    isLoading,
    isViewBalance,
  } = useBanks();

  const history = useHistory();

  return (
    <Balance>
      <S.HomeContainer>
        <S.Title>
          <S.TitleHello>Olá,</S.TitleHello>
          <S.TitleSurname>
            {isLoading ? (
              <Skeleton variant="text" width={150} height={40} />
            ) : (
              user?.surname
            )}
          </S.TitleSurname>
        </S.Title>

        <S.BalanceCard
          value={user?.balance}
          isLoading={isLoading}
          onClick={handleViewBalance}
          isView={isViewBalance}
        />

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
                isView={isViewBalance}
              />
            );
          })}
          {isAvailableToAddBank && (
            <S.CardAddBank onClick={() => handleConnectBank(true)}>
              <S.CardAddBankImage src={addBankImage} />
              <S.CardAddBankTitle>Novo banco</S.CardAddBankTitle>
            </S.CardAddBank>
          )}
        </S.TableContainer>
      </S.HomeContainer>

      {connectBankModal && <ModalConectBank onClose={onCloseModalConnect} />}
    </Balance>
  );
};
