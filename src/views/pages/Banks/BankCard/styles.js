import styled, { css } from "styled-components";

import { Card } from "views/components";

export const Container = styled(Card)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  cursor: normal;

  ${({ hasClickFunction }) =>
    hasClickFunction &&
    css`
      cursor: pointer;

      :hover {
        filter: brightness(110%);
      }
    `};
`;

export const Logo = styled.img`
  width: 45px;
  height: 45px;
  margin-bottom: 30px;
`;

export const ValueContainer = styled.div`
  display: flex;
  gap: ${({ isView }) => (isView ? "0px" : "5px")};
`;

export const ValueSymbol = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export const Value = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  font-family: Jost Bold;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.025em;
`;
