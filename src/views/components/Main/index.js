import React from "react";
import { useHistory } from "react-router-dom";

import { useApp } from "application/context";
import { useWindowDimensions } from "application/hooks";
import { logoutUser } from "infrastructure/services/user-service";

import logo from "views/assets/icons/logo.svg";
import leftPlataform from "views/assets/icons/left-white.png";
import menuImageWhite from "views/assets/icons/menu.png";
import menuImagePurple from "views/assets/icons/menu-purple.png";

import * as S from "./styles";

export const Main = ({
  state,
  listContent = [],
  setState,
  onClick,
  disable,
  loading,
  ...restProps
}) => {
  const { push } = useHistory();
  const { showToastMessage } = useApp();
  const { isTabletPortrait } = useWindowDimensions();

  const menuImage = state ? menuImageWhite : menuImagePurple;

  return (
    <S.MainContent
      onClick={() => {
        if (isTabletPortrait) return;

        setState(!state);
      }}
      state={state}
      {...restProps}
    >
      <S.MenuMobile
        src={menuImage}
        onClick={() => {
          setState(!state);
        }}
      />
      <S.Logo src={logo} />
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
              <S.Icon src={element?.icon} />
              {state && <p>{element?.name}</p>}
            </S.ListELement>
          ))}
      </S.List>

      <S.Footer state={state}>
        <S.ListELement
          state={state}
          onClick={(e) => {
            if (!state) return;

            e.stopPropagation();
            logoutUser();
            push("/");
            showToastMessage("Desconectado com sucesso");
          }}
        >
          <S.Icon src={leftPlataform} />
          {state && <p>Sair</p>}
        </S.ListELement>

        <S.Copy state={state}>
          © Todos os direitos reservados. <br />
          Balance, desde 2021.
        </S.Copy>
      </S.Footer>
    </S.MainContent>
  );
};
