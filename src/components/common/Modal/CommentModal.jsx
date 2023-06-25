import React, { useRef, useState, useContext } from 'react';
import * as S from './Modal.style';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../../context/AuthContext';

const CommentModal = ({ onClose, commentId, comments, setComments, postId, posts, setPosts }) => {
  const modalRef = useRef();
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const myCommentModalOptions = ['삭제'];
  const otherCommentModalOptions = ['신고하기'];
  const userId = accountname ? accountname : userAccountname;
  const isLoginUser = userId === userAccountname;

  const optionClick = (option) => {
    if (option === '삭제') {
      deleteComment(commentId)
        .then((response) => {
          if (response.success) {
            onClose();
            setComments(comments.filter((comment) => comment.id !== commentId));
          } else {
            onClose();
            deleteError(response.error);
          }
        })
        .catch((error) => {
          deleteError('서버 오류');
        });
    } else if (option === '신고하기') {
      reportComment(commentId);
      onClose();
    }
  };

  // const closeModal = (option) => {
  //   if (option === '삭제') {
  //     deleteComment(commentId)
  //       .then((response) => {
  //         if (response.success) {
  //           onClose();
  //           setComments(comments.filter((comment) => comment.id !== commentId));
  //         } else {
  //           onClose();
  //           deleteError(response.error);
  //         }
  //       })
  //       .catch((error) => {
  //         deleteError('서버 오류');
  //       });
  //   } else if (option === '취소') {
  //     onClose();
  //   }
  // };

  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}/comment/${commentId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
      });

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

  const reportComment = async (commentId) => {
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}comment/${commentId}/report`, {
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
        onClose();
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

  let optionElements = null;
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

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside}>
        <S.Ul>{optionElements}</S.Ul>
      </S.ModalBg>
    </>
  );
};

export default CommentModal;
