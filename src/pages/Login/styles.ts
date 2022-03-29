import styled from "styled-components";
import BgHome from "/assets/bg-home.jpg";
import { RecordCircle } from "@styled-icons/bootstrap/RecordCircle";

export const Container = styled.div`
  height: 100%;
`;
// Home
export const HomePage = styled.section`
  background-image: url(${BgHome});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`;

export const BlackBg = styled.div`
  background-color: rgba(5, 5, 10, .95);
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImgLogo = styled(RecordCircle)`
  height: 150px;
  width: 150px;
  color: var(--blue);

`;

export const Text = styled.p`
  margin-top: 20px;
  font-size: 40pt;
  color:var(--blue);
  font-weight: 500;
`
// Home

//Login
export const LoginD = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;

  width: 45VW;
  padding: 30px;
  border-radius: 10px;

  background-color : var(--tertiary);

  hr{
    width: 95%;
    border:1px solid var(--symbol);
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  input{
    height: 50px;
    width: 80%;
    border-radius: 5px;

    color: var(--blue);

    border: 1px solid var(--blue);
    outline: none;
    margin-bottom: 15px;
    padding-left:10px ;
    font-size: 14pt;
  }
  button{
    height: 50px;
    width: 80%;

    cursor: pointer;
    
    border-radius: 5px;
    border: 2px solid white;
    outline: none;
    margin-bottom: 30px;
    color: white;
    background-color: var(--blue);

    font-size: 20pt;
    font-weight: 500;

    transition: .2s;
    &:hover{
      background-color: var(--bluehover);
    }
  }
`

export const Cadastre = styled.a`
  margin-top: 30px;
  text-decoration: none;
  color: var(--blue);
  font-size: 15pt;
`
//Login