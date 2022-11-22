import { useHistory } from "react-router-dom";
import * as S from "./styles";

import peopleCard from "../../assets/home/people-card.svg";

const Home = () => {
  const history = useHistory();

  return (
    <S.HomeContainer>
      <S.HomeTitle>Balance</S.HomeTitle>
      <S.HomeImage src={peopleCard} alt="alou" />
      <S.HomeMessage>
        Bem-vindo ao aplicativo Balance! Aqui você poderá visualizar as suas
        quantias em cada conta bancária
      </S.HomeMessage>
      <S.HomeButton children="Acessar" onClick={() => history.push("/login")} />
      <S.HomeQuestion>Não tem uma conta ainda?</S.HomeQuestion>
      <S.HomeRedirectRegister onClick={() => history.push("/register")}>
        Cadastrar
      </S.HomeRedirectRegister>
    </S.HomeContainer>
  );
};

export { Home };
