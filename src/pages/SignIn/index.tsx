import React, { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

import { Container, Content, AnimatedContainer, Background } from './styles';

import imgLogo from '../../assets/logo.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório.')
            .email('E-mail inválido'),
          password: Yup.string().required('Senha obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Bem vindo!',
          description: 'Autenticação realizada com sucesso',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro na Autenticação',
            description:
              'Não foi possível realizar o login, checar as credenciais',
          });
        }
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimatedContainer>
          <img src={imgLogo} alt="GoBarver" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

            <a href="forget">Esqueci minha senha</a>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar a conta
          </Link>
        </AnimatedContainer>
      </Content>
      <Background />
    </Container>
  );
};
export default SignIn;
