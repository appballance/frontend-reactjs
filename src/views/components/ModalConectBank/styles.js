import styled from "styled-components";

export const MainContent = styled.div`
  background-color: ${({ theme: { colors } }) => colors.black_1};
  width: 100%;
  height: unset;
  min-height: 100vh;
  position: absolute;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white_1};
  width: 400px;
  /* height: 500px; */
  border-radius: 30px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Form = styled.div``;
