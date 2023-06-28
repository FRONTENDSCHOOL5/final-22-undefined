import React from 'react';
import TabMenu from '../../components/common/TabMenu/TabMenu';

import ChatListsContents from './ChatListsContents';
import FeedHeader from '../../components/common/Header/FeedHeader';

const ChatList = () => {
  return (
    <>
      <FeedHeader />
      <ChatListsContents />
      <TabMenu active={'1'} />
    </>
  );
};

export default ChatList;
