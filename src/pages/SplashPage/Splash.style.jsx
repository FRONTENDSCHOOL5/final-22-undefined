import styled, { keyframes } from 'styled-components';

export const FadeOut = keyframes`
  0%{
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
`;

export const SplashMain = styled.article`
  height: 100vh;
  background-color: #fff7f9;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 16px;
  }
  .mainIcon {
    width: 330px;
    animation: ${FadeOut} 1s ease-in-out;
    animation-delay: 2s;
  }
`;
