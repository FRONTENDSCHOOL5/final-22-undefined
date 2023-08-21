import React, { useEffect, useState } from 'react';
import MainIcon from '../../assets/Splash/MainLogoGif.gif';
import TitleTxt from '../../assets/Splash/TitleTxt.svg';
import { useNavigate } from 'react-router-dom';
import * as S from './Splash.style';

const Splash = () => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    const Timer = setTimeout(() => {
      setIsShown(true);
    }, 500);

    return () => clearTimeout(Timer);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const Timer = setTimeout(() => {
      navigate('/login/email');
    }, 3300);

    return () => clearTimeout(Timer);
  }, []);

  return (
    <S.SplashMain>
      <h1>{isShown && <img className='mainIcon' src={MainIcon} alt='메인 로고 이미지' />}</h1>
    </S.SplashMain>
  );
};

export default Splash;
