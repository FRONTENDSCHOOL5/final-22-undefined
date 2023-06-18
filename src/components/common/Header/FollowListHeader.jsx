import React from 'react';
import * as S from './FollowListHeader.style';

const FollowListHeader = ({ type }) => {
  return (
    <S.Header>
      <S.BackBtn />
      <S.Title>{type}</S.Title>
    </S.Header>
  );
};

export default FollowListHeader;
