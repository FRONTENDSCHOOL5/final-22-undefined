import React, { useRef } from 'react';
import * as S from './Modal.style';
import { useNavigate } from 'react-router';

const ChatModal = ({ onClose }) => {
  const modalRef = useRef();
  const navigate = useNavigate();
  const optionClick = (option) => {
    if (option === '채팅방 나가기') {
      onClose();
      navigate('/chat');
    }
  };

  const clickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside}>
        <S.Ul>
          <S.Li>
            <button onClick={() => optionClick('채팅방 나가기')}>채팅방 나가기</button>
          </S.Li>
        </S.Ul>
      </S.ModalBg>
    </>
  );
};

export default ChatModal;
