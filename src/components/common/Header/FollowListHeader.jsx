import React from 'react';
import * as S from './FollowListHeader.style';
import { useNavigate } from 'react-router';

const FollowListHeader = ({ type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <S.Header>
      <S.BackBtn onClick={handleClick} />
      <S.Title>{type}</S.Title>
    </S.Header>
  );
};

export default FollowListHeader;
