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
  const { bank, page, setPage, isLoading, redirectHome } = useBank(bankId);

  console.log("page ::", page);

  return (
    <Balance>
      <GoBack title="Detalhes do Banco" isBlack onClick={redirectHome} />
      <S.HomeContainer>
        <S.TableContainer>
          <Table
            isLoading={isLoading}
            bank={bank}
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
