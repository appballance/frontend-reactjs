import styled from "styled-components";

import { Button, GoBack as GoBackComponent } from "../../components";

export const RegisterContent = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme: { media } }) => media.mobile_landscape}) {
    padding: 80px 30px 0 30px;
    justify-content: start;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: start;
  color: ${({ theme: { colors } }) => colors.blue_1};
  margin-bottom: 50px;

  @media (max-width: ${({ theme: { media } }) => media.mobile_landscape}) {
    text-align: center;
  }
`;

export const Form = styled.div`
  width: 100%;
  max-width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RegisterButton = styled(Button)`
  margin-top: 50px;
  max-width: 150px;
  max-height: 35px;
`;

export const GoBack = styled(GoBackComponent)`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
`;
