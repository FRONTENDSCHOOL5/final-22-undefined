import React from 'react';
import Logo from '../../assets/Splash/logo.png';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';

const LoginEamil = () => {
  return (
    <>
      <Main>
        <H1>
          <img src={Logo} alt='메인 로고' />
        </H1>
        <LoginSect>
          <KakaoBtn size='lg'>카카오 계정으로 로그인</KakaoBtn>
          <KakaoBtn size='lg'>카카오 계정으로 로그인</KakaoBtn>
          <KakaoBtn size='lg'>카카오 계정으로 로그인</KakaoBtn>
        </LoginSect>
      </Main>
    </>
  );
};

export default LoginEamil;

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 180px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const H1 = styled.h1`
  width: 144px;
  margin: 0 auto;
`;

const LoginSect = styled.section`
  padding: 50px 0 82px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StyledButton = styled(Button)`
  width: 322px;
  background-color: ${({ theme }) => theme.colors.white};
  & + & {
    margin-top: 20px;
  }
`;

const KakaoBtn = styled(StyledButton)`
  color: #f2c94c;
  border: 1px solid #f2c94c;
`;
