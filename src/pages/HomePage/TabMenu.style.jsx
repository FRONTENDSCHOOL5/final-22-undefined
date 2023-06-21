import styled from 'styled-components';

import home from '../../assets/icon/icon-home.png';
import chat from '../../assets/icon/icon-message-circle.png';
import post from '../../assets/icon/icon-edit.png';
import profile from '../../assets/icon/icon-user.png';

export const Footer = styled.footer`
  margin: 20px auto 0px;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-top: 0.5px solid #dbdbdb;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;

export const Menus = styled.li`
  width: 84px;
  padding: 12px 0 6px;
`;

export const Icon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const HomeIcon = styled(Icon)`
  &::before {
    background: url(${home}) no-repeat center/ 24px 24px;
  }
`;

export const ChatIcon = styled(Icon)`
  &::before {
    background: url(${chat}) no-repeat center/ 24px 24px;
  }
`;

export const PostIcon = styled(Icon)`
  &::before {
    background: url(${post}) no-repeat center/ 24px 24px;
  }
`;

export const ProfileIcon = styled(Icon)`
  &::before {
    background: url(${profile}) no-repeat center/ 24px 24px;
  }
`;
