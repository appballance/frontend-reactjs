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
        listContent.map((element, index) => (
          <S.ListELement
            key={index}
            state={state}
            onClick={(e) => {
              if (state) {
                element.onClick(e);
              }
            }}
          >
            {state && <p>{element?.name}</p>}
            {!state && <S.Icon src={element?.icon} />}
          </S.ListELement>
        ))}
    </S.List>
  </S.MainContent>
);

export { Main };
