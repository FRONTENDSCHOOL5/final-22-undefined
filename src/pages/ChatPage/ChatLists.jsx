import React from 'react';
import TabMenu from '../../components/common/TabMenu/TabMenu';

import ChatListsContents from './ChatListsContents';
import FeedHeader from '../../components/common/Header/FeedHeader';
import { Helmet } from 'react-helmet';

const ChatList = () => {
  return (
    <>
      <Helmet>
        <title>채팅 목록</title>
      </Helmet>
      <FeedHeader />
      <ChatListsContents />
      <TabMenu active={'1'} />
    </>
  );
};

export default ChatList;
