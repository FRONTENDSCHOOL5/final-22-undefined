import React from 'react';

import mainIcon from '../../assets/강냥공냥공냥냥.png';
import background from '../../assets/강냥공냥배경.png';
import styled from 'styled-components';

const SplashMain = styled.article`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: url(${background}) repeat #fff7f9;
  img {
    width: 131px;
    height: 132px;
  }
`;

const Splash = () => {
  return (
    <SplashMain>
      <img src={mainIcon} alt='' />
    </SplashMain>
  );
};

export default Splash;
