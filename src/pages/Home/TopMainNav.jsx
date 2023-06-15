import React from 'react';
import * as S from './TopMainNav.style';

import iconSearch from '../../assets/icon/icon-search.png';

const TopMainNav = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.H1>감귤마켓 피드</S.H1>
        <a href='#'>
          <S.IMG src={iconSearch} alt='' />
        </a>
      </S.Wrapper>
    </S.Container>
  );
};

export default TopMainNav;
