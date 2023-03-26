import React from "react";

import { Balance } from "../../components/modules";
import { GoBack, Table } from "../../components";

import { useBank } from "./useBank";

import * as S from "./styles";

const Bank = (props) => {
  const {
    location: {
      state: { bankId },
    },
  } = props;
  const {
    page,
    setPage,
    isLoading,
    redirectHome,
    headerContent,
    rowsContent,
    bankTitle,
  } = useBank(bankId);

  return (
    <Balance>
      <GoBack title="Detalhes do Banco" isBlack onClick={redirectHome} />
      <S.HomeContainer>
        <S.TableContainer>
          <Table
            title={bankTitle}
            headerContent={headerContent}
            rowsContent={rowsContent}
            isLoading={isLoading}
            page={page}
            setPage={setPage}
            hasPagination
          />
        </S.TableContainer>
      </S.HomeContainer>
    </Balance>
  );
};

export { Bank };
