import React, { useEffect, useState } from 'react';

import MainIcon from '../../assets/강냥공냥공냥냥.png';
import wideBackground from '../../assets/강냥공냥컴포넌트2.png';
import TitleTxt from '../../assets/강냥공냥텍스트.png';
import SunglassesIcon from '../../assets/강냥공냥선글라스.png';

import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SlideFromTop = keyframes`
  0%{
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 100;
  }
`;

const ColorChange = keyframes`
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

const SplashMain = styled.article`
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

const Splash = () => {
  const [mainImg, setMainImg] = useState(MainIcon);

  useEffect(() => {
    const Timer = setTimeout(() => {
      setMainImg(SunglassesIcon);
    }, 1000);

    return () => clearTimeout(Timer);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const Timer = setTimeout(() => {
      navigate('/login');
    }, 3500);

    return () => clearTimeout(Timer);
  }, []);

  return (
    <SplashMain>
      <div>
        <img className='mainIcon' src={mainImg} alt='' />
        <h1>
          <img src={TitleTxt} alt='강냥공냥공냥냥' />
        </h1>
      </div>
    </SplashMain>
  );
};

export default Splash;
