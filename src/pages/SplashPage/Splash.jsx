import React, { useEffect, useState } from 'react';
import MainIcon from '../../assets/Splash/logo.png';
import TitleTxt from '../../assets/Splash/logoTxt.png';
import SunglassesIcon from '../../assets/Splash/logoSunglasses.png';
import { useNavigate } from 'react-router-dom';
import * as S from './Splash.style';

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
      navigate('/login/email');
    }, 3500);

    return () => clearTimeout(Timer);
  }, []);

  return (
    <S.SplashMain>
      <div>
        <img className='mainIcon' src={mainImg} alt='' />
        <h1>
          <img src={TitleTxt} alt='강냥공냥공냥냥' />
        </h1>
      </div>
    </S.SplashMain>
  );
};

export default Splash;
