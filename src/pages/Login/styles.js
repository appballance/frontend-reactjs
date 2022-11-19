import styled from "styled-components";

import { Button, GoBack } from "../../components";

export const Body = styled.div`
  background: none;
  width: 100%;
  height: 100vh;

  display: flex;
`;

export const Left = styled.div`
  background: #480355;
  width: 55%;
  height: 100vh;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LoginButton = styled(Button)`
  margin-top: 20px;
`;

export const GoBackMobile = styled(GoBack)`
  display: none;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const GoBackDesktop = styled(GoBack)`
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Right = styled.div`
  background: #fff;
  width: 45%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxLogin = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;
