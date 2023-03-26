import styled, { css } from "styled-components";

export const MainContent = styled.div`
  width: ${({ state }) => (state ? "200px" : "70px")};
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.purple_1};

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    width: ${({ state }) => (state ? "100%" : "0px")};
    position: ${({ state }) => (state ? "fixed" : "relative")};
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Logo = styled.img`
  width: 35px;
  height: 35px;
  padding-top: 15px;
  padding-left: 15px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;
  padding-top: 40px;
`;

export const ListELement = styled.li`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ state }) =>
    state &&
    css`
      justify-content: flex-start;
      padding-left: 20px;
    `};

  p {
    padding-left: 15px;
    color: ${({ theme: { colors } }) => colors.white_1};
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Copy = styled.div`
  color: transparent;
  white-space: nowrap;
  padding: 10px;
  opacity: 0.3;

  ${({ state }) =>
    state &&
    css`
      color: ${({ theme: { colors } }) => colors.white_1};
    `};
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 11px;

  ${({ state }) =>
    !state &&
    css`
      width: 70px;
    `};
`;

export const MenuMobile = styled.img`
  position: fixed;
  top: 15px;
  right: 15px;
  /* margin: 15px; */
  display: none;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    display: block;
  }
`;
