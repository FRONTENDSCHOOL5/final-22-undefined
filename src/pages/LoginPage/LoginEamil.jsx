import React from 'react';
import * as S from './LoginEmail.style';
<<<<<<< HEAD
<<<<<<< HEAD
import MainLogo from '../../assets/Splash/mainLogo.svg';
=======
import Logo from '../../assets/Splash/logo.png';
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
import MainLogo from '../../assets/Splash/mainLogo.svg';
>>>>>>> 3cdb195 (style: 이메일 로그인 창 sns버튼 클릭시 공사중 이라는 알림 설정)

const LoginEamil = () => {
  return (
    <>
      <S.Main>
        <S.H1>
<<<<<<< HEAD
<<<<<<< HEAD
          <S.LogoImg src={MainLogo} alt='메인 로고' />
        </S.H1>
        <S.LoginSect>
          <S.KakaoBtn onClick={() => alert('기능 준비중 입니다.')} size='lg'>
            카카오 계정으로 로그인
          </S.KakaoBtn>
          <S.GoogleBtn onClick={() => alert('기능 준비중 입니다.')} size='lg'>
            구글 계정으로 로그인
          </S.GoogleBtn>
          <S.FacebookBtn onClick={() => alert('기능 준비중 입니다.')} size='lg'>
            페이스북 계정으로 로그인
          </S.FacebookBtn>
=======
          <S.LogoImg src={Logo} alt='메인 로고' />
        </S.H1>
        <S.LoginSect>
          <S.KakaoBtn size='lg'>카카오 계정으로 로그인</S.KakaoBtn>
          <S.GoogleBtn size='lg'>구글 계정으로 로그인</S.GoogleBtn>
          <S.FacebookBtn size='lg'>페이스북 계정으로 로그인</S.FacebookBtn>
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
          <S.LogoImg src={MainLogo} alt='메인 로고' />
        </S.H1>
        <S.LoginSect>
          <S.KakaoBtn onClick={() => alert('기능 준비중 입니다.')} size='lg'>
            카카오 계정으로 로그인
          </S.KakaoBtn>
          <S.GoogleBtn onClick={() => alert('기능 준비중 입니다.')} size='lg'>
            구글 계정으로 로그인
          </S.GoogleBtn>
          <S.FacebookBtn onClick={() => alert('기능 준비중 입니다.')} size='lg'>
            페이스북 계정으로 로그인
          </S.FacebookBtn>
>>>>>>> 3cdb195 (style: 이메일 로그인 창 sns버튼 클릭시 공사중 이라는 알림 설정)
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
