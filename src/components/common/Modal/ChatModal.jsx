import React, { useRef } from 'react';
import * as S from './Modal.style';
import { useNavigate } from 'react-router';

const ChatModal = ({ onClose, options }) => {
  const modalRef = useRef();
  const navigate = useNavigate();

  const optionClick = (option) => {
    if (option === '채팅방 나가기') {
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
          {options.map((option, index) => (
            <S.Li key={index}>
              <button onClick={() => optionClick(option)}>{option}</button>
            </S.Li>
          ))}
        </S.Ul>
      </S.ModalBg>
    </>
  );
};

export default ChatModal;
