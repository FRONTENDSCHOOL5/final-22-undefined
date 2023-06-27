import styled, { keyframes } from 'styled-components';
import wideBackground from '../../assets/Splash/logoComponents2.png';

export const SlideFromTop = keyframes`
  0%{
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100;
  }
`;

export const ColorChange = keyframes`
  0% {
    filter: hue-rotate(0deg);
    border-radius: 20px;
    background-color: pink;
  }
  50% {
    filter: hue-rotate(180deg);
    border-radius: 20px;
    background-color: lightpink;
  }
  100% {
    filter: hue-rotate(360deg);
    border-radius: 20px;
    background-color: lavenderblush;
  }
`;

export const SplashMain = styled.article`
  height: 100vh;
  background: #fff7f9;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background: url(${wideBackground}) no-repeat center #fff7f9;
    animation: ${SlideFromTop} 1s ease-in-out;
  }
  .mainIcon {
    width: 131px;
    height: 132px;
    animation: ${SlideFromTop} 1s ease-in-out;
  }
  h1 {
    animation: ${SlideFromTop} 1s ease-in-out;
    img {
      animation: ${ColorChange} 0.5s linear infinite;
    }
  }
  p {
    font-size: 18px;
  }
`;
