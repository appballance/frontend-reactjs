import styled from "styled-components";

export const InputContainer = styled.div`
  width: ${({ width }) => width};
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  color: ${({ labelColor, theme: { colors } }) => labelColor || colors.gray_1};
  font-size: 12px;
  line-height: 18px;
`;

export const InputElement = styled.input`
  background-color: transparent;
  width: calc(100% - 10px);
  height: 45px;
  padding-left: 10px;
  color: ${({ theme: { colors } }) => colors.gray_1};
  border: 1px solid ${({ theme: { colors } }) => colors.gray_1};
  border-radius: 6px;

  ::-webkit-input-placeholder {
    color: ${({ theme: { colors } }) => colors.gray_1};
  }

  textarea:focus,
  &:focus {
    outline: none;
  }
`;
