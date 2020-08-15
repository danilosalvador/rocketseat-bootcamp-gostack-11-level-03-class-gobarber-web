import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import imgLogo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={imgLogo} alt="GoBarver" />
      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forget">Esqueci minha senha</a>
      </form>
      <a href="account">
        <FiLogIn />
        Criar a conta
      </a>
    </Content>
    <Background />
  </Container>
);
export default SignIn;
