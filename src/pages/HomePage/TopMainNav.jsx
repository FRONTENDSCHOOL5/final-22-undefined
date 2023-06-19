import React from 'react';
import * as S from './TopMainNav.style';

const TopMainNav = () => {
  return (
    <S.Header>
      <S.H1>감귤마켓 피드</S.H1>
      <S.SearchBtn href='/search' />
    </S.Header>
  );
};

export default TopMainNav;
