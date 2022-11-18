import styled from "styled-components";

export const NotificationContainer = styled.div`
  background-color: ${({ type }) => type === "Success" ? "#08A045" : "#A22C29"};
  width: 300px;
  height: 60px;
  border-radius: 5px;
  top: 10px;
  left: 10px;
  position: absolute;
  border-top: 3px solid #FFF;
`;

export const NotificationText = styled.h3`
  padding-left: 10px;
  padding-top: 5px;
  color: #FFF;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
`;