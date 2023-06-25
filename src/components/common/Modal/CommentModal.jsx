import React, { useRef, useState, useContext, useEffect } from 'react';
import * as S from './Modal.style';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';

const CommentModal = ({ onClose, commentId, postId, onDeleteComment }) => {
  const modalRef = useRef();
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  // const userId = accountname ? accountname : userAccountname;
  // const isLoginUser = userId === userAccountname;
  // const [comments, setComments] = useState([]);

  const optionClick = async (option) => {
    if (option === '삭제') {
      try {
        const response = await deleteComment();
        if (response.success) {
          onDeleteComment(commentId);
          onClose();
        } else {
          deleteError(response.error);
        }
      } catch (error) {
        deleteError('서버 오류');
      }
    } else if (option === '신고하기') {
      reportComment();
      onClose();
    }
  };

  const deleteComment = async () => {
    // console.log('postId 값:', postId);
    // console.log('commentId 값:', commentId);
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        return { success: true };
      } else if (response.status === 404) {
        throw new Error('존재하지 않는 댓글입니다.');
      } else if (response.status === 401) {
        throw new Error('잘못된 요청입니다. 로그인 정보를 확인하세요.');
      } else {
        throw new Error('댓글 삭제 실패');
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const deleteError = (error) => {
    console.log(error);
  };

  const reportComment = async () => {
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
        console.log('댓글 신고 완료');
      } else {
        throw new Error('댓글 신고 실패');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  const isLoginUser = accountname ? accountname === userAccountname : true; // 댓글이 현재 사용자의 것인지 확인합니다.

  let optionElements = null;
  if (isLoginUser) {
    optionElements = (
      <S.Li>
        <button onClick={() => optionClick('삭제')}>삭제</button>
      </S.Li>
    );
  } else {
    optionElements = (
      <S.Li>
        <button onClick={() => optionClick('신고하기')}>신고하기</button>
      </S.Li>
    );
  }

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside}>
        <S.Ul>{optionElements}</S.Ul>
      </S.ModalBg>
    </>
  );
};

export default CommentModal;
