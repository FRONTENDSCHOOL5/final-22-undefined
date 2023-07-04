import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './TopSearchNav.style';
import backButtonImg from '../../assets/icon/icon-arrow-left.svg';

const TopSearchNav = ({ onChange }) => {
  const navigate = useNavigate();

  const backHandle = (e) => {
    e.preventDefault();
    navigate(-1); // 이전 페이지 이동
  };
  return (
    <S.Header>
      <S.ButtonIcon onClick={backHandle}>
        <img src={backButtonImg} alt='뒤로가기 버튼' />
      </S.ButtonIcon>
      <S.Input type='text' placeholder='계정 검색' onChange={onChange} />
    </S.Header>
  );
};

export default TopSearchNav;
