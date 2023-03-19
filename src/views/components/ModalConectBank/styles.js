import styled from "styled-components";

import { Button as ButtonComponent } from "../../components";


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

export const Button = styled(ButtonComponent)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const AlertCodeSended = styled.div`
  border-radius: 5px;
  width: calc(100% - 2px);
  height: fit-content;
  color: #37323e;
  font-weight: bolder;
`;

export const AlertContent = styled.p`
  background: rgba(236, 212, 68, 0.8);
  border: 2px solid rgb(236, 212, 68);
  padding: 10px;
  margin-top: 5px;

  color: #37323e;
  font-weight: normal;
`;

export const FormModal = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
