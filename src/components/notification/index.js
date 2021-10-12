import * as S from "./styles";

const Notification = ({ show, children = "Error message" }) => {

  return (
    <>
      {show && (
        <S.NotificationContainer>
          <S.NotificationText>
            {children}
          </S.NotificationText>
        </S.NotificationContainer>
      )}
    </>
  );
};

export { Notification };