import React, { useContext } from 'react';
import TabMenu from '../../components/common/TabMenu/TabMenu';

import ChatListsContents from './ChatListsContents';
import FeedHeader from '../../components/common/Header/FeedHeader';

import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';

const ChatList = () => {
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  // 현재 프로필의 accountname
  const userId = accountname ? accountname : userAccountname;
  // 현재 프로필에 해당하는 사람이 로그인된 유저랑 같은 사람인지 여부
  const isLoginUser = userId === userAccountname;

  return (
    <>
      <FeedHeader />
      <ChatListsContents />
      <TabMenu active={isLoginUser ? '1' : '0'} />
    </>
  );
};

export default ChatList;
