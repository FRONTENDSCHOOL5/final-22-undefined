import React from 'react';
import * as S from './TopSearchNav.style';

const TopSearchNav = () => {
  return (
    <S.Header>
      <S.Arrow href='/home' />
      <S.Input type='text' placeholder='계정 검색' />
    </S.Header>
  );
};

export default TopSearchNav;
