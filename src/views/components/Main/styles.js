import styled from "styled-components";

export const MainContent = styled.div`
  width: ${({ state }) => (state ? "200px" : "70px")};
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.purple_1};

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    width: ${({ state }) => (state ? "100%" : "70px")};
    position: ${({ state }) => (state ? "absolute" : "relative")};
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
  color: ${({ theme: { colors } }) => colors.white_1};
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: ${({ state }) => (!state ? "center" : "flex-state")};
  cursor: pointer;

  p {
    padding-left: 15px;
  }

  :hover {
    background-color: ${({ theme: { colors }, state }) =>
      state ? colors.purple_2 : colors.purple_1};
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
