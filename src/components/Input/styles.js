import styled from "styled-components";

export const InputContainer = styled.div`
  width: ${({ width }) => width};
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  color: ${({ labelColor }) => labelColor};
  font-size: 12px;
  line-height: 18px;
`;

export const InputElement = styled.input`
  background-color: ${({ bgColor }) => bgColor };
  width: calc(100% - 10px);
  height: 45px;
  border: none;
  border-radius: 8px;
  padding-left: 10px;
  color: #FFF;
  
  ::-webkit-input-placeholder {
    color: #FFF;
  }

  textarea:focus,
  &:focus {
    outline: none;
  }
`;