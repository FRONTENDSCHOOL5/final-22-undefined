import React, { useRef, useState, useContext } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import { useNavigate } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';

const FeedModal = ({ options, onClose }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const { setUserToken, setUserAccountname } = useContext(AuthContextStore);

  const optionClick = (option) => {
    if (option === '설정 및 개인정보') {
      navigate('/profile');
      window.location.reload(); // 프로필 페이지로 이동
    } else if (option === '로그아웃') {
      setSelectedOption(option);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('accountname');
    setUserToken(null);
    setUserAccountname(null);
    setSelectedOption('');
    navigate('/');
  };

  const closeModal = (option) => {
    console.log(selectedOption);
    if (option === '로그아웃') {
      console.log('로그아웃 성공');
      handleLogout();
    } else if (option === '취소') {
      setSelectedOption('');
      onClose();
    }
  };

  const renderAlertModal = () => {
    if (selectedOption === '로그아웃') {
      return (
        <AlertModal
          message='로그아웃하시겠어요?'
          onClose={closeModal}
          buttons={['취소', '로그아웃']}
          buttonFontColor={['#767676', '#Fd7a6E']}
          buttonBorder={[null, { borderLeft: '0.5px solid #dbdbdb' }]}
        />
      );
    }

    return null;
  };

  const clickOutside = (e) => {
    // 어두운 배경 클릭시 하단 모달창 닫기
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  const optionElements = options.map((option, index) => (
    <S.Li key={index}>
      <button onClick={() => optionClick(option)}>{option}</button>
    </S.Li>
  ));

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside} style={{ pointerEvents: selectedOption ? 'none' : 'auto' }}>
        <S.Ul>{optionElements}</S.Ul>
      </S.ModalBg>
      {renderAlertModal()}
    </>
  );
};

export default FeedModal;
