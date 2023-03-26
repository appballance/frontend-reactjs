import React from "react";
import { useHistory } from "react-router-dom";

import { userMock } from "application/mocks";

import { Table } from "../../components";
import { Balance } from "../../components/modules";

import { useBanks } from "./useBanks";

import * as S from "./styles";

export const Banks = () => {
  const { user, isLoading, headerContent, rowsContent, bankTitle } = useBanks();

  const history = useHistory();

  const rows = isLoading ? userMock?.banks : user?.banks;

  return (
    <Balance>
      <S.HomeContainer>
        <S.TableContainer>
          {rows?.map((bank, index) => {
            const titleOnClick = () => {
              history.push("/bank", {
                bankId: bank.entity_id,
              });
            };

            const title = bankTitle(bank);
            const header = headerContent();
            const rows = rowsContent(bank);

            return (
              <Table
                key={index}
                title={title}
                titleOnClick={titleOnClick}
                headerContent={header}
                rowsContent={rows}
                isLoading={isLoading}
                rowSkeleton={3}
              />
            );
          })}
        </S.TableContainer>
      </S.HomeContainer>
    </Balance>
  );
};
