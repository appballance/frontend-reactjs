import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

export const Message = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;

export const Image = styled.img`
  margin: 15px 0;
`;

export const Question = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  margin-bottom: 25px;
`;
