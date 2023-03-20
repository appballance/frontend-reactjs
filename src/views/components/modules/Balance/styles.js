import styled from "styled-components";
import { Form } from "formik";

import { Button as ButtonComponent } from "../../../components";

export const HomeContainer = styled.div`
  width: 100%;
  height: unset;
  display: flex;
  flex-direction: row;
`;

export const HomeTitle = styled.div`
  padding: 20px 0 0 20px;
`;

export const Left = styled.div`
  height: unset;
`;

export const Right = styled.div`
  width: 100%;
`;

export const ContainerTables = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0 40px;
`;

export const FormModal = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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
