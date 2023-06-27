import React from 'react';
import Logo from '../../assets/Splash/logo.png';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';
import KakaoLogo from '../../assets/message-circle.png';
import FacebookLogo from '../../assets/facebook.png';
import GoogleLogo from '../../assets/google.png';
const LoginEamil = () => {
  return (
    <>
      <Main>
        <H1>
          <LogoImg src={Logo} alt='메인 로고' />
        </H1>
        <LoginSect>
          <KakaoBtn size='lg'>카카오 계정으로 로그인</KakaoBtn>
          <GoogleBtn size='lg'>구글 계정으로 로그인</GoogleBtn>
          <FacebookBtn size='lg'>페이스북 계정으로 로그인</FacebookBtn>
          <Ul>
            <Li>
              <LinkLogin to={'/login'}>이메일로 로그인</LinkLogin>
            </Li>
            <Li>
              <LinkJoin to={'/join'}>회원가입</LinkJoin>
            </Li>
          </Ul>
        </LoginSect>
      </Main>
    </>
  );
};

export default LoginEamil;

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 25vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const H1 = styled.h1`
  width: 144px;
  height: 144px;
`;

const LoginSect = styled.section`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 50px 0 82px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const LogoImg = styled.img`
  width: 100%;
  height: auto;
  vertical-align: top;
`;

const Ul = styled.ul`
  font-size: 12px;
  margin-top: 25px;
  display: flex;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.txtColor};
`;

const Li = styled.li``;

const LinkJoin = styled(Link)`
  &::before {
    content: '|';
    margin: 0 15px 0 15px;
  }
`;
const LinkLogin = styled(Link)``;

const StyledButton = styled(Button)`
  width: 322px;
  position: relative;
  color: ${({ theme }) => theme.colors.txtColor};
  background-color: ${({ theme }) => theme.colors.white};
  transition: 0.2s ease;
  &:hover {
    filter: brightness(97%);
  }
  & + & {
    margin-top: 15px;
  }
`;

const SnsBtn = styled(StyledButton)`
  &::before {
    position: absolute;
    content: '';
    width: 24px;
    height: 24px;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
  }
`;

const KakaoBtn = styled(SnsBtn)`
  border: 1.5px solid #f2c94c;
  &:hover {
    filter: brightness(95%);
  }
  &::before {
    background: url(${KakaoLogo}) no-repeat center / 24px 24px;
  }
`;

const FacebookBtn = styled(SnsBtn)`
  border: 1.5px solid #2d9cdb;
  &::before {
    background: url(${FacebookLogo}) no-repeat center / 24px 24px;
  }
`;

const GoogleBtn = styled(SnsBtn)`
  border: ${({ theme }) => `1.5px solid ${theme.colors.txtColor}`};
  &::before {
    background: url(${GoogleLogo}) no-repeat center / 24px 24px;
  }
`;
