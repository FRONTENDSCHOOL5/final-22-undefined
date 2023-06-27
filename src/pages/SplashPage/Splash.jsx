import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import MainIcon from '../../assets/Splash/MainTwo.gif';
import TitleTxt from '../../assets/Splash/TitleTxt.svg';
=======
import MainIcon from '../../assets/Splash/logo.png';
import TitleTxt from '../../assets/Splash/logoTxt.png';
import SunglassesIcon from '../../assets/Splash/logoSunglasses.png';
>>>>>>> 92424a5 (move: style 파일 전체 분리)
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
<<<<<<< HEAD
      <h1>{isShown && <img className='mainIcon' src={MainIcon} alt='메인 로고 이미지' />}</h1>
=======
      <div>
        <img className='mainIcon' src={mainImg} alt='' />
        <h1>
          <img src={TitleTxt} alt='강냥공냥공냥냥' />
        </h1>
      </div>
>>>>>>> 92424a5 (move: style 파일 전체 분리)
    </S.SplashMain>
  );
};

export default Splash;
