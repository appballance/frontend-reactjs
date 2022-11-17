import React from "react";

import * as S from "./styles";

const Notification = ({ show, children = "Error message" }) => (
  <>
    {show && (
      <S.NotificationContainer>
        <S.NotificationText>{children}</S.NotificationText>
      </S.NotificationContainer>
    )}
  </>
);

export { Notification };
