import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';
import KakaoLogo from '../../assets/message-circle.png';
import FacebookLogo from '../../assets/facebook.png';
import GoogleLogo from '../../assets/google.png';

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 25vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const H1 = styled.h1`
  width: 144px;
  height: 144px;
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
  width: 100%;
  height: auto;
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
    filter: brightness(95%);
  }
  &::before {
    background: url(${KakaoLogo}) no-repeat center / 24px 24px;
  }
`;

export const FacebookBtn = styled(SnsBtn)`
  border: 1.5px solid #2d9cdb;
  &::before {
    background: url(${FacebookLogo}) no-repeat center / 24px 24px;
  }
`;

export const GoogleBtn = styled(SnsBtn)`
  border: ${({ theme }) => `1.5px solid ${theme.colors.txtColor}`};
  &::before {
    background: url(${GoogleLogo}) no-repeat center / 24px 24px;
  }
`;
