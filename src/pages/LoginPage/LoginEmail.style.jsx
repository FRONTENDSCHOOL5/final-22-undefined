import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 541f25e (style: 아이콘 svg로 일괄 변경 및 기획에 맞게 컨텐츠 벨류 변경)
import KakaoLogo from '../../assets/kakaoLogo.svg';
import FacebookLogo from '../../assets/facebookLogo.svg';
import GoogleLogo from '../../assets/Google__G__Logo.svg';
import KakaoLogoWhite from '../../assets/message-circle-white.svg';
import FacebookLogoWhite from '../../assets/facebook-white.svg';
import GoogleLogoWhite from '../../assets/google-white.svg';
<<<<<<< HEAD
=======
import KakaoLogo from '../../assets/message-circle.png';
import FacebookLogo from '../../assets/facebook.png';
import GoogleLogo from '../../assets/google.png';
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
>>>>>>> 541f25e (style: 아이콘 svg로 일괄 변경 및 기획에 맞게 컨텐츠 벨류 변경)

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
<<<<<<< HEAD
<<<<<<< HEAD
  padding-top: 20vh;
=======
  padding-top: 25vh;
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
  padding-top: 15vh;
>>>>>>> 541f25e (style: 아이콘 svg로 일괄 변경 및 기획에 맞게 컨텐츠 벨류 변경)
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const H1 = styled.h1`
<<<<<<< HEAD
<<<<<<< HEAD
  width: 200px;
  /* height: 144px; */
=======
  width: 144px;
  height: 144px;
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
  width: 200px;
  /* height: 144px; */
>>>>>>> 541f25e (style: 아이콘 svg로 일괄 변경 및 기획에 맞게 컨텐츠 벨류 변경)
`;

export const LoginSect = styled.section`
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

export const LogoImg = styled.img`
<<<<<<< HEAD
  width: 200px;
  /* height: auto; */
=======
  width: 100%;
  height: auto;
>>>>>>> 92424a5 (move: style 파일 전체 분리)
  vertical-align: top;
`;

export const Ul = styled.ul`
  font-size: 12px;
  margin-top: 25px;
  display: flex;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.txtColor};
`;

export const Li = styled.li``;

export const LinkJoin = styled(Link)`
  &::before {
    content: '|';
    margin: 0 15px 0 15px;
  }
`;
export const LinkLogin = styled(Link)``;

export const StyledButton = styled(Button)`
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

export const SnsBtn = styled(StyledButton)`
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

export const KakaoBtn = styled(SnsBtn)`
  border: 1.5px solid #f2c94c;
  &:hover {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 541f25e (style: 아이콘 svg로 일괄 변경 및 기획에 맞게 컨텐츠 벨류 변경)
    color: white;
    background-color: #f2c94c;
    /* filter: brightness(95%); */
  }
  &:hover::before {
    background: url(${KakaoLogoWhite}) no-repeat center / 24px 24px;
<<<<<<< HEAD
=======
    filter: brightness(95%);
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
>>>>>>> 541f25e (style: 아이콘 svg로 일괄 변경 및 기획에 맞게 컨텐츠 벨류 변경)
  }
  &::before {
    background: url(${KakaoLogo}) no-repeat center / 24px 24px;
  }
`;

export const FacebookBtn = styled(SnsBtn)`
  border: 1.5px solid #2d9cdb;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 541f25e (style: 아이콘 svg로 일괄 변경 및 기획에 맞게 컨텐츠 벨류 변경)
  &:hover {
    color: white;
    background-color: #2d9cdb;
  }
  &:hover::before {
    background: url(${FacebookLogoWhite}) no-repeat center / 24px 24px;
  }
<<<<<<< HEAD
=======
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
>>>>>>> 541f25e (style: 아이콘 svg로 일괄 변경 및 기획에 맞게 컨텐츠 벨류 변경)
  &::before {
    background: url(${FacebookLogo}) no-repeat center / 24px 24px;
  }
`;

export const GoogleBtn = styled(SnsBtn)`
  border: ${({ theme }) => `1.5px solid ${theme.colors.txtColor}`};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 541f25e (style: 아이콘 svg로 일괄 변경 및 기획에 맞게 컨텐츠 벨류 변경)
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.txtColor};
  }
  &:hover::before {
    background: url(${GoogleLogoWhite}) no-repeat center / 20px 20px;
  }
<<<<<<< HEAD
=======
>>>>>>> 92424a5 (move: style 파일 전체 분리)
=======
>>>>>>> 541f25e (style: 아이콘 svg로 일괄 변경 및 기획에 맞게 컨텐츠 벨류 변경)
  &::before {
    background: url(${GoogleLogo}) no-repeat center / 24px 24px;
  }
`;
