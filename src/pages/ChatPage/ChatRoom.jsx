import React from 'react';
import FeedHeader from '../../components/common/Header/FeedHeader';
import ChatRoomContents from './ChatRoomContents';
import ChatComment from './ChatComment';

const ChatList = () => {
  return (
    <>
      <FeedHeader isChatHeader={true} />
      <ChatRoomContents />
      <ChatComment atChatroom={true} />
    </>
  );
};

export default ChatList;
