import React from "react";
import { Button } from "views/components";

import imageConnect from "views/assets/images/connect.png";

import * as S from "./styles";

export const WithoutBank = ({
  children,
  isEmpty = false,
  handleConnectBank = null,
  isAvailableToConnect = false,
  ...restProps
}) => {
  if (!isEmpty) return <S.Container {...restProps}>{children}</S.Container>;

  const hasClickFunction = typeof handleConnectBank === "function";

  return (
    <S.Container isEmpty={isEmpty} {...restProps}>
      <S.Message>
        Acabamos de ver que você não tem banco conectado com a nossa plataforma.
      </S.Message>
      <S.Image src={imageConnect} />
      <S.Question>O que acha de conectar agora?</S.Question>
      <Button
        onClick={(event) => {
          if (!hasClickFunction) return;

          handleConnectBank(event);
        }}
        disable={!isAvailableToConnect}
      >
        Conectar
      </Button>
    </S.Container>
  );
};
