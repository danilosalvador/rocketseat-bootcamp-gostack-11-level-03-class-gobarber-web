import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import imgSignUpBackground from '../../assets/signup-background.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  place-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromRigth = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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

  animation: ${appearFromRigth} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  a {
    text-decoration: none;
    color: #f4ede8;

    display: flex; /* NECESSÁRIO POR CAUSA DO align-items */
    align-items: center;

    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${imgSignUpBackground}) no-repeat center;
  background-size: cover;
`;
