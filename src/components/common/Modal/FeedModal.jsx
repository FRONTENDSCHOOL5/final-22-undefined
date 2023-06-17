import React, { useEffect, useRef, useState } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import { useNavigate } from 'react-router-dom';
import theme from './../../../styles/Theme';

const FeedModal = ({ options, onClose }) => {
  const modalRef = useRef();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const clickOutSide = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', clickOutSide);

    return () => {
      document.removeEventListener('mousedown', clickOutSide);
    };
  }, [onClose]);

  const optionClick = (option) => {
    if (option === '설정 및 개인정보') {
      navigate('/profile'); // 프로필 페이지로 이동
    } else if (option === '로그아웃') {
      setSelectedOption(option);
    }
  };

  const closeModal = () => {
    setSelectedOption('');
  };

  const renderAlertModal = () => {
    if (selectedOption === '로그아웃') {
      return (
        <AlertModal
          message='로그아웃하시겠어요?'
          onClose={closeModal}
          buttons={['취소', ' 로그아웃']}
          buttonFontColor={['#767676', '#F26E22']}
          buttonBorder={[null, { borderLeft: '0.5px solid #dbdbdb' }]}
        />
      );
    }

    return null;
  };

  return (
    <>
      <S.ModalBg>
        <S.Ul ref={modalRef}>
          {options.map((option, index) => (
            <S.Li key={index}>
              <button onClick={() => optionClick(option)}>{option}</button>
            </S.Li>
          ))}
        </S.Ul>
      </S.ModalBg>
      {renderAlertModal()}
    </>
  );
};

export default FeedModal;
