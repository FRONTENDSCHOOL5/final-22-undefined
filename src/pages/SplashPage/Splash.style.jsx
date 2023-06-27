import styled, { keyframes } from 'styled-components';
<<<<<<< HEAD

export const FadeOut = keyframes`
  0%{
    opacity: 100;
  }
  100% {
    opacity: 0;
=======
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
>>>>>>> 92424a5 (move: style 파일 전체 분리)
  }
`;

export const SplashMain = styled.article`
  height: 100vh;
<<<<<<< HEAD
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
=======
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
>>>>>>> 92424a5 (move: style 파일 전체 분리)
  }
`;
