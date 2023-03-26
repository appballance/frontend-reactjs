import styled, { css } from "styled-components";
import { transparentize, shade } from "polished";
import ReactLoading from "react-loading";

const sizes = {
  small: css`
    width: 150px;
    height: 35px;
  `,
  medium: css`
    width: 216px;
    height: 48px;
  `,
};

export const ButtonElement = styled.button`
  background-color: ${({ bgColor, loading }) =>
    loading === "true" ? transparentize(0.6, bgColor) : bgColor};
  cursor: ${({ loading }) => (loading === "true" ? "not-allowed" : "pointer")};
  border: none;
  border-radius: 8px;
  padding: 20px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  &:hover {
    background-color: ${({ bgColor, loading }) =>
      loading !== "true" && shade(0.3, bgColor)};
  }
  &:disabled {
    background-color: ${({ bgColor }) => transparentize(0.6, bgColor)};
    cursor: not-allowed;
  }

  ${({ size }) => sizes[size]}

  width: ${({ width }) => width};
`;

export const ButtonLoading = styled(ReactLoading)`
  display: ${({ loading }) => (loading === "true" ? "initial" : "none")};
`;
