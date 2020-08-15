import styled from 'styled-components';
import { shade } from 'polished';

import imgSignInBackground from '../../assets/signin-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch; /* DIVISÃO do Content e Background EM 50% */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;

      padding: 16px;
      width: 100%;

      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      border-radius: 10px;
      border: 0;

      width: 100%;
      height: 56px;

      padding: 0 16px;
      margin-top: 16px;

      color: #312e38;
      font-weight: 500;

      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      text-decoration: none;

      display: block; /* NECESSÁRIO POR CAUSA DO MARGIN-TOP */
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

    display: flex;
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
