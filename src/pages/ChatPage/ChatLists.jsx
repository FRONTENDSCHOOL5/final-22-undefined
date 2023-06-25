import React from 'react';
import TabMenu from '../HomePage/TabMenu';
import ChatListsContents from './ChatListsContents';
import FeedHeader from '../../components/common/Header/FeedHeader';

const ChatList = () => {
  return (
    <>
      <FeedHeader />
      <ChatListsContents />
      <TabMenu />
    </>
  );
};

export default ChatList;
