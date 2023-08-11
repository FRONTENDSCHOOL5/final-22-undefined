import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './FeedHeader.style';
import backButtonImg from '../../../assets/icon/icon-arrow-left.svg';
import ModalButtonImg from '../../../assets/icon/icon- more-vertical.svg';
import FeedModal from '../../../components/common/Modal/FeedModal';
import ChatModal from '../../../components/common/Modal/ChatModal';

const FeedHeader = ({ isChatHeader }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const backHandle = () => {
    navigate(-1); // 이전 페이지 이동
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const feedModalOptions = ['설정 및 개인정보', '로그아웃'];
  const chatModalOptions = ['채팅방 나가기'];

  return (
    <>
      <S.Header>
        <S.ButtonIcon onClick={backHandle}>
          <img src={backButtonImg} alt='뒤로가기 버튼' />
        </S.ButtonIcon>
        <S.ButtonIcon onClick={openModal}>
          <img src={ModalButtonImg} alt='숨겨진 모달창 나타내기' />
        </S.ButtonIcon>
      </S.Header>
      {isModalOpen && (
        <>
          {isChatHeader ? (
            <ChatModal options={chatModalOptions} onClose={closeModal} />
          ) : (
            <FeedModal options={feedModalOptions} onClose={closeModal} />
          )}
        </>
      )}
    </>
  );
};

export default FeedHeader;
