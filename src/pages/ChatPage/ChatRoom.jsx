import React from 'react';
import FeedHeader from '../../components/common/Header/FeedHeader';
import ChatRoomContents from './ChatRoomContents';
import ChatComment from './ChatComment';
import { Helmet } from 'react-helmet';

const ChatList = () => {
  return (
    <>
      <Helmet>
        <title>채팅방</title>
      </Helmet>
      <FeedHeader isChatHeader={true} />
      <ChatRoomContents />
      <ChatComment atChatroom={true} />
    </>
  );
};

export default ChatList;
