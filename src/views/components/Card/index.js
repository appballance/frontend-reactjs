import React from "react";

import * as S from "./styles";

export const Card = ({ width, height, fontColor, children, ...restProps }) => (
  <S.Card width={width} height={height} fontColor={fontColor} {...restProps}>
    {children}
  </S.Card>
);
