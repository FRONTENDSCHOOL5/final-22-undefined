import styled from 'styled-components';
import ChatIcon from '../../assets/icon/icon-message-circle.svg';
import ShareIcon from '../../assets/icon/icon-share.png';
import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';

export const Header = styled.section`
  padding-top: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

export const Container = styled.div`
  max-width: 290px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  /* box-shadow: inset 0 0 20px lime; */
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  display: block;
  margin: 0 auto 16px;
`;

export const UserName = styled.strong`
  font-weight: 700;
  display: block;
  margin-bottom: 4px;
`;

export const AccountName = styled.strong`
  color: ${({ theme }) => theme.colors.txtColor};
  font-size: 12px;
`;

export const Intro = styled.p`
  font-size: 14px;
  width: 280px;
  color: ${({ theme }) => theme.colors.txtColor};
  margin: 14px auto 26px;
`;

export const FollwerLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 20%;

  strong {
    font-weight: 700;
    font-size: 18px;
    display: block;
  }
`;

export const FollowingLink = styled(Link)`
  position: absolute;
  right: 0;
  top: 20%;

  strong {
    font-weight: 700;
    font-size: 18px;
    display: block;
    color: ${({ theme }) => theme.colors.txtColor};
  }
`;

export const Type = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.txtColor};
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 26px;
`;

export const ChatBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  background: url(${ChatIcon}) no-repeat center / 18px;
`;

export const FollowBtn = styled(Button)`
  width: 120px;
`;

export const ShareBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  background: url(${ShareIcon}) no-repeat center / 18px;
`;

export const EditProfileBtn = styled(Button)`
  width: 120px;
`;

export const AddProductBtn = styled(Button)`
  width: 100px;
`;
