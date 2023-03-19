import React from "react";

import { userMock } from "application/mocks";

import { Table } from "../../components";
import { Balance } from "../../components/modules";

import { useHomeAuthenticated } from "./useHomeAuthenticated";

import * as S from "./styles";

const HomeAuthenticated = () => {
  const { user, isLoading } = useHomeAuthenticated();

  const rows = isLoading ? userMock?.banks : user?.banks;

  return (
    <Balance>
      <S.HomeContainer>
        <S.TableContainer>
          {rows?.map((bank) => (
            <Table
              bank={bank}
              key={bank.id}
              isLoading={isLoading}
              rowSkeleton={3}
              hasRedirect
            />
          ))}
        </S.TableContainer>
      </S.HomeContainer>
    </Balance>
  );
};

export { HomeAuthenticated };
