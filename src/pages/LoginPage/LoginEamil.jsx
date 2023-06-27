import React from 'react';
import * as S from './LoginEmail.style';
import Logo from '../../assets/Splash/logo.png';

const LoginEamil = () => {
  return (
    <>
      <S.Main>
        <S.H1>
          <S.LogoImg src={Logo} alt='메인 로고' />
        </S.H1>
        <S.LoginSect>
          <S.KakaoBtn size='lg'>카카오 계정으로 로그인</S.KakaoBtn>
          <S.GoogleBtn size='lg'>구글 계정으로 로그인</S.GoogleBtn>
          <S.FacebookBtn size='lg'>페이스북 계정으로 로그인</S.FacebookBtn>
          <S.Ul>
            <S.Li>
              <S.LinkLogin to={'/login'}>이메일로 로그인</S.LinkLogin>
            </S.Li>
            <S.Li>
              <S.LinkJoin to={'/join'}>회원가입</S.LinkJoin>
            </S.Li>
          </S.Ul>
        </S.LoginSect>
      </S.Main>
    </>
  );
};

export default LoginEamil;
