import styled, { css } from "styled-components";

export const Title = styled.p`
  padding: 10px 0;
  cursor: pointer;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;ƒ
    `}

  ${({ hasRedirect }) =>
    !hasRedirect &&
    css`
      cursor: default;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    `}
`;
