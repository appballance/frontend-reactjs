import styled from "styled-components";

import { Button, GoBack as GoBackComponent } from "../../components";

export const RegisterContent = styled.div`
  background: none;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme: { media } }) => media.tablet_landscape}) {
    justify-content: flex-start;
  }
`;
 
export const Form = styled.div`
  width: 100%;
  max-width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: ${({ theme: { media } }) => media.tablet_landscape}) {
    padding-top: 100px;
  }
`;

export const RegisterButton = styled(Button)`
  margin-top: 20px;
`;

export const GoBack = styled(GoBackComponent)`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
`;
