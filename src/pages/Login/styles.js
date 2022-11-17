import styled from "styled-components";

import { Button } from "../../components/Button";

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

  @media(max-width: 800px) {
    display: none; 
  }
`;

export const BoxLogin = styled.div`
  width: 80%;
`;

export const LoginButton = styled(Button)`
  margin-top: 20px;
`;

export const Right = styled.div`

background: #FFF;
  width: 45%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 800px) {
    width: 100%;
  }

`;