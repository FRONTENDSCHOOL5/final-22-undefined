import React, { useRef, useState, useContext } from 'react';
import * as S from './Modal.style';
import AlertModal from './AlertModal';
import { useNavigate } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';

const PostModal = ({ onClose, postId }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const postModalOptions = ['삭제', '수정'];

  const optionClick = (option) => {
    if (option === '삭제') {
      setSelectedOption(option);
    } else if (option === '수정') {
      navigate('/post'); // 일단 post로 설정, 후에 post 수정? 페이지로 경로 설정
    }
  };

  const closeModal = (option) => {
    if (option === '삭제') {
      deletePost(postId)
        .then((response) => {
          if (response.success) {
            console.log('삭제 완료');
            navigate('/profile');
          } else {
            deleteError(response.error); // 삭제 실패 시 에러 처리
          }
        })
        .catch((error) => {
          deleteError('서버 오류'); // 서버 통신 실패 시 에러 처리
        });
    } else if (option === '취소') {
      setSelectedOption('');
      onClose(); // onClose 콜백 호출
    }
  };

  const deletePost = async (postId) => {
    console.log('postId 값:', postId);
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${JSON.parse(userToken)}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // 성공할 경우
        return { success: true };
      } else if (response.status === 404) {
        // 게시글이 존재하지 않을 경우
        throw new Error('존재하지 않는 게시글입니다.');
      } else if (response.status === 401) {
        // 다른 사용자가 해당 게시글을 수정할 경우
        throw new Error('잘못된 요청입니다. 로그인 정보를 확인하세요.');
      } else {
        // 기타 실패할 경우
        throw new Error('게시글 삭제 실패');
      }
    } catch (error) {
      // 실패할 경우
      return { success: false, error: error.message };
    }
  };

  const deleteError = (error) => {
    console.log(error);
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
