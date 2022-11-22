import styled from "styled-components";
import { Button } from "../../components/Button";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 300px 0 300px;

  @media (max-width: ${({ theme: { media }}) => media.tablet_landscape}) {
    margin: 100px 200px 0 200px;
  }
  @media (max-width: ${({ theme: { media }}) => media.tablet_portrait}) {
    margin: 0 50px;
  }
`;

export const HomeTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #1f1d1d;

  margin: 25px 0 25px 0;
`;

export const HomeImage = styled.img``;

export const HomeMessage = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px; 
  color: #323236;
  text-align: center;

  margin: 30px 0 30px 0;
`;

export const HomeButton = styled(Button)`
  width: 80%;
  margin: 0 0 60px 0;
`;

export const HomeQuestion = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;  
  color: #323236;
`;

export const HomeRedirectRegister = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px; 
  color: #9448BC;
  cursor: pointer;

  margin: 10px 0;
`;
