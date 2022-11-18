import React from "react";

import * as S from "./styles";

const Notification = ({ show, type, children = "Error message" }) => (
  <>
    {show && (
      <S.NotificationContainer type={type}>
        <S.NotificationText>{children}</S.NotificationText>
      </S.NotificationContainer>
    )}
  </>
);

export { Notification };
