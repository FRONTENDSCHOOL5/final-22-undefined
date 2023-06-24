import React, { useRef, useState, useContext } from 'react';
import * as S from './Modal.style';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';

const CommentModal = ({ onClose, postId, posts, setPosts }) => {
  const modalRef = useRef(); // 모달 외부 클릭할 때 모달 닫기
  const navigate = useNavigate();
  const { accountname } = useParams(); // 현재 사용자 계정
  const { pathname } = useLocation();
  const [selectedOption, setSelectedOption] = useState('');
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const myCommentModalOptions = ['삭제'];
  const otherCommentModalOptions = ['신고하기'];
  const userId = accountname ? accountname : userAccountname;
  const isLoginUser = userId === userAccountname;
  const isHomeFollowedComments = pathname === '/home';

  // 모달 옵션을 클릭했을 때
  const optionClick = (option) => {
    if (option === '삭제') {
      setSelectedOption(option);
    } else if (option === '신고하기') {
      reportComment(commentId);
    }
  };

  // 모달 닫기
  const closeModal = (option) => {
    // console.log(postId);
    if (option === '삭제') {
      deleteComment(commentId) // 댓글 삭제 호출
        .then((response) => {
          if (response.success) {
            // console.log('삭제 완료');
            onClose();
            setPosts(posts.filter((post) => post.id !== postId));
          } else {
            onClose();
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

  // 댓글 삭제 및 삭제 오류 처리
  const deleteComment = async () => {
    // console.log('comment 값:', commentId);
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return { success: true };
      } else if (response.status === 404) {
        // 댓글이 존재하지 않을 경우
        throw new Error('존재하지 않는 게시글입니다.');
      } else if (response.status === 401) {
        // 다른 사용자가 해당 댓글을 수정할 경우
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

  // 댓글 삭제 에러
  const deleteError = (error) => {
    console.log(error);
  };

  // 댓글 신고
  const reportComment = async (postId) => {
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}/comments/${commentId}/report`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          report: {
            comment: 'commentId',
          },
        }),
      });

      if (response.ok) {
        // 성공할 경우
        console.log('댓글 신고 완료');
        onClose();
      } else {
        // 실패할 경우
        throw new Error('댓글 신고 실패');
      }
    } catch (error) {
      // 실패할 경우
      console.log(error);
    }
  };

  // 어두운 배경 클릭할 때 모달창 처리
  const clickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose(); // onClose 콜백 호출
    }
  };

  // 사용자 계정에 따라 모달에 표시할 옵션 요소 생성 및 렌더링
  let optionElements = null;
  // 현재 사용자의 계정과 모달을 호출한 게시글 작성자 계정이 일치하는지 확인
  if (isLoginUser) {
    optionElements = myCommentModalOptions.map((option, index) => (
      <S.Li key={index}>
        <button onClick={() => optionClick(option)}>{option}</button>
      </S.Li>
    ));
  } else {
    optionElements = otherCommentModalOptions.map((option, index) => (
      <S.Li key={index}>
        <button onClick={() => optionClick(option)}>{option}</button>
      </S.Li>
    ));
  }

  if (isHomeFollowedComments && !isLoginUser) {
    optionElements.push(
      <S.Li key='report'>
        <button onClick={() => optionClick('신고하기')}>신고하기</button>
      </S.Li>,
    );
  }

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside} style={{ pointerEvents: selectedOption ? 'none' : 'auto' }}>
        <S.Ul>
          {optionElements}
          {/* {options.map((option, index) => 이 부분을 위에 분기처리로 변경
            <S.Li key={index}>
              <button onClick={() => optionClick(option)}>{option}</button>
            </S.Li>
          ))} */}
        </S.Ul>
      </S.ModalBg>
    </>
  );
};

export default CommentModal;
