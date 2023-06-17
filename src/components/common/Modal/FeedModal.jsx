import React, { useEffect, useRef, useState, useContext } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import { useNavigate } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';

const FeedModal = ({ options, onClose }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const { setUserToken, setUserAccountname } = useContext(AuthContextStore);

  // useEffect(() => {
  //   // 모달 외부 클릭시 모달 닫는 이벤트 리스너 추가
  //   const clickOutSide = (e) => {
  //     if (modalRef.current && !modalRef.current.contains(e.target)) {
  //       onClose();
  //     }
  //   };

  //   document.addEventListener('mousedown', clickOutSide);

  //   return () => {
  //     document.removeEventListener('mousedown', clickOutSide);
  //   };
  // }, [onClose]);

  const optionClick = (option) => {
    if (option === '설정 및 개인정보') {
      navigate('/profile/edit'); // 프로필 수정 페이지로 이동
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
      console.log('하이');
      handleLogout();
    } else {
      setSelectedOption('');
    }
  };

  const renderAlertModal = () => {
    if (selectedOption === '로그아웃') {
      return (
        <AlertModal
          message='로그아웃하시겠어요?'
          onClose={closeModal}
          buttons={['취소', '로그아웃']}
          buttonFontColor={['#767676', '#F26E22']}
          buttonBorder={[null, { borderLeft: '0.5px solid #dbdbdb' }]}
        />
      );
    }

    return null;
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={handleClickOutside}>
        <S.Ul>
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
