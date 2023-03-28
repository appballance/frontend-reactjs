import styled from "styled-components";

import { BalanceCard as BalanceCardComponent, Card } from "views/components";

import { WithoutBank } from "./WithoutBank";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 0 40px;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    padding: 20px 20px 0 20px;
  }
`;

export const TableContainer = styled(WithoutBank)`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const RowIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const Title = styled.div`
  > p {
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 36px;
  }
  margin-bottom: 25px;
`;

export const TitleHello = styled.p`
  font-family: Jost Thin;
`;

export const TitleSurname = styled.p`
  font-family: Jost Bold;
`;

export const BalanceCard = styled(BalanceCardComponent)`
  margin-bottom: 40px;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    width: 100%;
  }
`;

export const CardAddBank = styled(Card).attrs({
  background: "rgba(148, 72, 188, 0.1)",
})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
`;

export const CardAddBankImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const CardAddBankTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.025em;
`;
