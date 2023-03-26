import styled, { css } from "styled-components";
import { Card } from "../Card";

export const Container = styled(Card).attrs({
  background:
    "linear-gradient(114.19deg, #FFFFFF -37.82%, #9549BC 99.99%, #9448BC 100%)",
  borderRadius: "20px",
  width: "324px",
  height: "87px",
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Element = styled.p`
  display: flex;
  align-items: flex-start;

  ${({ isView }) =>
    !isView &&
    css`
      gap: 10px;
    `};
`;

export const Coin = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: normal;

  color: ${({ theme: { colors } }) => colors.white_1};
`;

export const Value = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;
  color: ${({ theme: { colors } }) => colors.white_1};
`;

export const Eyes = styled.img`
  width: 26px;
  height: 26px;
`;
