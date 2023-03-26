import styled, { css } from "styled-components";

export const GoBackContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin: 20px 0 0 20px;
  cursor: pointer;
`;

export const GoBackImage = styled.img`
  width: 25px;
  height: 25px;
`;

export const GoBackTitle = styled.p`
  font-weight: bold;
  ${({ isWhite }) =>
    isWhite &&
    css`
      color: ${({ theme: { colors } }) => colors.white_1};
    `};
`;
