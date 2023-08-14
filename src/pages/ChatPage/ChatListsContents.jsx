import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ChatListsContents.style';
import MainLayout from '../../components/common/MainLayout/MainLayout';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import newChat from '../../assets/newChat.png';

const ChatListsContents = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat/room');
  };

  return (
    <MainLayout>
      <S.H1>채팅 리스트 페이지</S.H1>
      <S.ChatListCard onClick={handleClick}>
        <img className='newIcon' src={newChat} alt='새로운 메세지를 알리는 동그랗고 빨간 아이콘' />
        <PostUserProfileImg className='userImg' size={'42px'} />
        <div className='chatListTxt'>
          <h2>🐾강냥공냥공냥냥</h2>
          <p>가입을 축하드립니다!</p>
          <p className='date'>2023.06.20</p>
        </div>
      </S.ChatListCard>
    </MainLayout>
  );
};

export default ChatListsContents;
