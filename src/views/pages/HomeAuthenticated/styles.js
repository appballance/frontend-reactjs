import styled from "styled-components";
import { Form } from "formik";


import { Button as ButtonComponent } from "../../components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const HomeTitle = styled.div`
  padding: 20px 0 0 20px;
`;

export const Left = styled.div``;

export const Right = styled.div`
  @media (max-width: ${({ theme: { media } }) => media.tablet_landscape}) {
    width: ${({ state }) => (state ? "0%" : "fit_content")};
  }
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
  color: #37323E;
  font-weight: bolder;
`;

export const AlertContent = styled.p`
  background: rgba(236, 212, 68, 0.8);
  border: 2px solid rgb(236, 212, 68);
  padding: 10px;
  margin-top: 5px;

  color: #37323E;
  font-weight: normal;
`;
