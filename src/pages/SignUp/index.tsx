import React from 'react';
import { Form } from '@unform/web';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

import imgLogo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={imgLogo} alt="GoBabaer" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="Email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="Password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="back">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
