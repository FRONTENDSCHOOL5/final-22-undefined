import React from 'react';
import FeedHeader from '../../components/common/Header/FeedHeader';
import ChatRoomContents from './ChatRoomContents';
import Comment from './Comment';

const ChatList = () => {
  return (
    <>
      <FeedHeader />
      <ChatRoomContents />
      <Comment atChatroom={true} />
    </>
  );
};

export default ChatList;
