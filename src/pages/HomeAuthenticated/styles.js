import styled from "styled-components";

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

export const FormModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled(ButtonComponent)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;