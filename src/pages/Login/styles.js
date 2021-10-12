import styled from "styled-components";

import { Button } from "../../components/Button";

export const Body = styled.div`
  background: none;
  width: 100%;
  height: 100vh;

  display: flex;
`;

export const Left = styled.div`
  background: #FFF;
  width: 40%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxLogin = styled.div`
  width: 50%;
`;

export const LoginButton = styled(Button)`
  margin-top: 20px;
`;

export const Right = styled.div`
  background: #480355;
  width: 60%;
  height: 100vh;
`;