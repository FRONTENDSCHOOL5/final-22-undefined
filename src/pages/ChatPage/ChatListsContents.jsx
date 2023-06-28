import React from 'react';
import styled from 'styled-components';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../components/common/MainLayout/MainLayout';
import newChat from '../../assets/newChat.png';

const ChatListCard = styled.section`
  .newIcon {
    width: 12px;
    height: 12px;
    position: relative;
    left: 10px;
  }
  .chatListTxt {
    display: inline-block;
    cursor: pointer;
  }
  h2 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.txtColor};
  }
  .date {
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
  }
`;

const ChatListsContents = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat/room');
  };

  return (
    <MainLayout>
      <ChatListCard onClick={handleClick}>
        <img className='newIcon' src={newChat} alt='' />
        <PostUserProfileImg className='userImg' size={'42px'} />
        <div className='chatListTxt'>
          <h2>🐾강냥공냥공냥냥</h2>
          <p>가입을 축하드립니다!</p>
          <p className='date'>2023.06.20</p>
        </div>
      </ChatListCard>
    </MainLayout>
  );
};

export default ChatListsContents;
