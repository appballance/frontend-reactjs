import styled from "styled-components";

export const MainContent = styled.div`
  width: ${({ state }) => (state ? "200px" : "70px")};
  height: unset;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.purple_1};

  @media (max-width: ${({ theme: { media } }) => media.tablet_landscape}) {
    width: ${({ state }) => (state ? "100%" : "70px")};
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 35px;
  height: 35px;
  padding-top: 15px;
  display: ${({ state }) => (state ? "none" : "flex")};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;
  padding-top: 20px;
`;

export const ListELement = styled.li`
  color: ${({ theme: { colors } }) => colors.white_1};
  cursor: pointer;
  display: ${({ state }) => (state ? "flex" : "none")};
`;
