import React from "react";

import {
  Container,
  HomePage,
  ImgLogo,
  BlackBg,
  LoginD,
  Text,
  Form,
  Cadastre,
  Logo
} from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <HomePage>
        <BlackBg>
          <Logo>
            <ImgLogo />
            <Text>CanaldoProvedor</Text>
          </Logo>
          <LoginD>
            <Form method="post" action="home">
              <input placeholder="Email" type="email" name="email" id="email" />
              <input placeholder="Senha" type="password" name="password" id="password" />
              <button type="submit">Entrar</button>
            </Form>
            <hr />
            <Cadastre onClick={()=>{
              location.href="google.com.br"
            }} href="">Cadatre-se</Cadastre>
          </LoginD>
        </BlackBg>
      </HomePage>
    </Container>
  );
};

export default Login;
