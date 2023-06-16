import React, { useState } from 'react';
import * as S from './FeedHeader.style';
import backButtonImg from './../../assets/icon/icon-arrow-left.png';
import ModalButtonImg from './../../assets/icon/icon-more-vertical.png';
import { useNavigate } from 'react-router-dom';
import PostModal from '../../components/common/Modal/PostModal';

const FeedHeader = () => {
  const navigate = useNavigate(); // useNavigate 함수로 호출
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backHandle = (e) => {
    e.preventDefault();
    navigate(-1); // 이전 페이지 이동
  };

  const ModalHandleOpen = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalOptions = ['설정 및 개인정보', '로그아웃'];

  return (
    <S.Header>
      <S.ButtonIcon onClick={backHandle}>
        <img src={backButtonImg} alt='뒤로가기 버튼' />
      </S.ButtonIcon>
      <S.ButtonIcon onClick={ModalHandleOpen}>
        <img src={ModalButtonImg} alt='숨겨진 모달창 나타내기' />
      </S.ButtonIcon>
      {isModalOpen && (
        <>
          <S.BgDark>
            <PostModal options={modalOptions} onClose={closeModal} />
          </S.BgDark>
        </>
      )}
    </S.Header>
  );
};

export default FeedHeader;
