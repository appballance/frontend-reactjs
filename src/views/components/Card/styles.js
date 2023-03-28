import styled from "styled-components";

export const Card = styled.div`
  width: ${({ width }) => width || "125px"};
  height: ${({ height }) => height || "155px"};
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => "10px" || borderRadius};
  padding: ${({ padding }) => padding || "20px"};
  font-family: "Jost";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 46px;
  color: ${({ fontColor, theme: { colors } }) => fontColor || colors.white_1};

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;
