import React, { useRef, useState, useContext } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import { useNavigate } from 'react-router-dom';

const PostModal = ({ onClose }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  const postModalOptions = ['삭제', '수정'];

  const optionClick = (option) => {
    if (option === '삭제') {
      setSelectedOption(option);
    } else if (option === '수정') {
      navigate('/profile'); // 일단 프로필로 설정, 후에 게시글 수정 페이지로 경로 설정
    }
  };

  const closeModal = (option) => {
    if (option === '삭제') {
      deletePost()
        .then((response) => {
          if (response.success) {
            changePage(); // 삭제 성공 시 페이지 재랜더링
          } else {
            deleteError(response.error); // 삭제 실패 시 에러 처리
          }
        })
        .catch((error) => {
          deleteError('서버 오류'); // 서버 통신 실패 시 에러 처리
        });

      setSelectedOption(option);
    } else if (option === '취소') {
      setSelectedOption('');
      onClose(); // onClose 콜백 호출
    }
  };

  const deletePost = () => {
    // 게시글 삭제 요청을 처리하는 비동기 함수
    return new Promise((resolve, reject) => {
      // 게시글 삭제 요청 처리 로직

      // 성공 시
      resolve({ success: true });

      // 실패 시
      // reject({ success: false, error: '에러 메시지' });
    });
  };

  const deleteError = (error) => {
    // 삭제 실패 에러 처리 로직
    console.log(error);
  };

  const changePage = () => {
    // 페이지 재랜더링을 위한 로직
    // changePage 함수의 구현은 해당 페이지 컴포넌트에서 진행
  };

  const renderAlertModal = () => {
    if (selectedOption === '삭제') {
      return (
        <AlertModal
          message='게시글을 삭제할까요?'
          onClose={closeModal}
          buttons={['취소', '삭제']}
          buttonFontColor={['#767676', '#F26E22']}
          buttonBorder={[null, { borderLeft: '0.5px solid #dbdbdb' }]}
        />
      );
    }

    return null;
  };

  const clickOutside = (e) => {
    // 어두운 배경 클릭시 하단 모달창 닫기
    if (modalRef.current && modalRef.current === e.target) {
      onClose(); // onClose 콜백 호출
    }
  };

  const optionElements = postModalOptions.map((option, index) => (
    <S.Li key={index}>
      <button onClick={() => optionClick(option)}>{option}</button>
    </S.Li>
  ));

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside} style={{ pointerEvents: selectedOption ? 'none' : 'auto' }}>
        <S.Ul>
          {optionElements}
          {/* {options.map((option, index) => 이 부분을 함수로 위에 빼주고 props로 받음
            <S.Li key={index}>
              <button onClick={() => optionClick(option)}>{option}</button>
            </S.Li>
          ))} */}
        </S.Ul>
      </S.ModalBg>
      {renderAlertModal()}
    </>
  );
};

export default PostModal;
