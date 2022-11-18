import React from "react";

import * as S from "./styles";

const Main = ({
  state,
  listContent = [],
  setState,
  onClick,
  disable,
  loading,
  ...restProps
}) => (
  <S.MainContent
    onClick={() => {
      setState(!state);
    }}
    state={state}
    {...restProps}
  >
    <S.Logo state={state} />
    <S.List>
      {listContent.length &&
        listContent.map(
          (element, index) =>
            state && (
              <S.ListELement
                key={index}
                state={state}
                onClick={element.onClick}
              >
                <a>{element.name}</a>
              </S.ListELement>
            )
        )}
    </S.List>
  </S.MainContent>
);

export { Main };
