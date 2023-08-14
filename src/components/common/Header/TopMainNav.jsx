import React from 'react';
import * as S from './TopMainNav.style';
import headerLogoCat from '../../../assets/icon/headerLogoCat.svg';
import headerLogoPaw from '../../../assets/icon/happaypaw.svg';
import headerLogoDog from '../../../assets/icon/headerLogoDog.svg';

const TopMainNav = () => {
  return (
    <S.Header>
      <h1>
        <span className='a11y-hidden'>강냥공냥공냥냥</span>
        <img src={headerLogoPaw} alt='강냥공냥공냥냥 헤더로고' />
      </h1>
      <S.SearchLink to={'/search'} />
    </S.Header>
  );
};

export default TopMainNav;
