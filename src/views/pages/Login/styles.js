import { Form } from "formik";
import styled, { css } from "styled-components";

import { Button, GoBack } from "../../components";

export const Body = styled.div`
  background: none;
  width: 100%;
  height: 100vh;

  display: flex;
`;

export const Left = styled.div`
  background: ${({ theme: { colors } }) => colors.purple_1};
  width: 55%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const BanksImage = styled.img`
  width: 390px;
  height: 425px;
`;

export const Describe = styled.p`
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.white_1};
  max-width: 80%;
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Box = styled(Form)`
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

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const Logo = styled.img`
  width: 130px;
  height: 130px;
`;

export const ForgotPassword = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ChangePassword = styled.p`
  color: ${({ theme: { colors } }) => colors.purple_1};
  font-family: Jost Bold;
  cursor: pointer;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
      color: ${({ theme: { colors } }) => colors.gray_1};
      user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
    `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DontRegister = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  display: flex;
  align-items: center;
  gap: 5px;

  position: absolute;
  bottom: 10px;
`;

export const Register = styled.p`
  color: ${({ theme: { colors } }) => colors.purple_1};
  font-family: Jost Bold;
  cursor: pointer;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
      color: ${({ theme: { colors } }) => colors.gray_1};
      user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
    `}
`;
