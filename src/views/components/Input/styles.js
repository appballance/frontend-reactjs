import styled from "styled-components";

export const InputContainer = styled.div`
  width: ${({ width }) => width};
  text-align: left;
  display: ${({ hide }) => (hide ? "none" : "flex")};
  justify-content: center;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.blue_1};
  font-size: 12px;
  line-height: 18px;
`;

export const InputElement = styled.input`
  background-color: transparent;
  width: calc(100% - 10px);
  height: 45px;
  padding-left: 10px;
  color: ${({ theme: { colors } }) => colors.blue_1};
  border: 0;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.blue_1};

  ::-webkit-input-placeholder {
    color: ${({ theme: { colors } }) => colors.blue_1};
    text-transform: capitalize;
  }

  textarea:focus,
  &:focus {
    outline: none;
  }
`;
