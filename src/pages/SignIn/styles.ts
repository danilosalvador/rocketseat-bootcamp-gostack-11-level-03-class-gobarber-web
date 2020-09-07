import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import imgSignInBackground from '../../assets/signin-background.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch; /* DIVISÃO DA TELA ENTRE o Content e Background - ESTICAR */
`;

export const Content = styled.div`
  display: flex;
  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  place-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      text-decoration: none;

      display: block; /* NECESSÁRIO POR CAUSA DO margin-top */
      margin-top: 24px;

      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /* '>' IRÁ APLICAR O ESTILO APENAS PARA O MESMO NIVEL E NAO PARA O SUBNIVEIS */
  > a {
    color: #ff9000;
    text-decoration: none;

    display: flex; /* NECESSÁRIO POR CAUSA DO align-items */
    align-items: center;

    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${imgSignInBackground}) no-repeat center;
  background-size: cover;
`;
