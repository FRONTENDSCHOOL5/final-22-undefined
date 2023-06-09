import React from 'react';
import styled, { css } from 'styled-components';
import errorLogo from '../../assets/errorLogo.svg';
import Button from '../../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

const ErrorMessage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 20px;
    text-align: center;
    &::before {
      content: '';
      display: block;
      background: url(${errorLogo}) no-repeat center/ contain;
      width: 140px;
      height: 140px;
      margin: 0 auto 25px;
    }
  }
`;

const StyledButton = styled(Button)`
  width: 120px;
`;

const Error404 = () => {
  const navigate = useNavigate();
  const backHandle = (e) => {
    navigate(-1); // 이전 페이지 이동
  };
  return (
    <ErrorMessage>
      <p>페이지를 찾을 수 없습니다</p>
      <StyledButton size='lg' onClick={backHandle}>
        이전 페이지
      </StyledButton>
    </ErrorMessage>
  );
};

export default Error404;
