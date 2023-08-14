import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Error404.style';

const Error404 = () => {
  const navigate = useNavigate();
  const backHandle = (e) => {
    navigate(-1); // 이전 페이지 이동
  };
  return (
    <S.ErrorMessage>
      <h1>에러 페이지</h1>
      <p>페이지를 찾을 수 없습니다</p>
      <S.StyledButton size='lg' onClick={backHandle}>
        이전 페이지
      </S.StyledButton>
    </S.ErrorMessage>
  );
};

export default Error404;
