import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import TabMenu from '../HomePage/TabMenu';

import arrowLeft from '../../assets/icon/icon-arrow-left.png';
import moreVertical from '../../assets/icon/icon-more-vertical.png';
import ChatListsContents from './ChatListsContents';

const Header = styled.header`
  border-bottom: 0.5px solid #dbdbdb;
  padding: 13px 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

const Arrow = styled.a`
  background: url(${arrowLeft}) no-repeat center/ 22px 22px;
  width: 22px;
  height: 22px;
  vertical-align: middle;
  float: left;
  cursor: pointer;
`;

const MoreVertical = styled.a`
  background: url(${moreVertical}) no-repeat center/ 22px 22px;
  width: 22px;
  height: 22px;
  vertical-align: middle;
  float: right;
  cursor: pointer;
`;

const ChatList = () => {
  return (
    <Wrapper>
      <Header>
        <Arrow href='/home' />
        <MoreVertical />
      </Header>
      <ChatListsContents />
      <TabMenu />
    </Wrapper>
  );
};

export default ChatList;
