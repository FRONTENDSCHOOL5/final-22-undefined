import React, { useRef, useState, useContext, useEffect } from 'react';
import * as S from './Modal.style';
import { AuthContextStore } from '../../../context/AuthContext';

const CommentModal = ({ onClose, commentId, commentList, postId, commentAuthor, setCommentList, setCommentCnt }) => {
  const modalRef = useRef();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [isLoginUser, setIsLoginUser] = useState(false);
  useEffect(() => {
    // 댓글 작성자와 현재 사용자의 계정명 비교하여 isLoginUser 값을 설정
    setIsLoginUser(userAccountname === commentAuthor); // commentId는 댓글 작성자의 계정명으로 가정
  }, [userAccountname, commentAuthor]);

  const optionClick = async (option) => {
    if (option === '삭제') {
      try {
        const response = await deleteComment();
        if (response.success) {
          setCommentList(commentList.filter((comment) => comment.id !== commentId));
          setCommentCnt((prev) => prev - 1);
        } else {
          console.log(response.error);
        }
      } catch (error) {
        console.log('댓글 삭제 오류:', error);
      } finally {
        onClose();
      }
    } else if (option === '신고하기') {
      reportComment();
      onClose();
    }
  };

  const deleteComment = async () => {
    console.log('postId 값:', postId);
    console.log('commentId 값:', commentId);
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
      } else {
        const responseBody = await response.json();
        console.log('서버 오류 응답:', responseBody);
        throw new Error(responseBody.message || '댓글 삭제 실패');
      }
    } catch (error) {
      console.log('댓글 삭제 오류:', error);
      return { success: false, error: '댓글 삭제 오류' };
    }
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
            comment: commentId,
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

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside}>
        <S.Ul>
          {isLoginUser ? (
            <S.Li>
              <button onClick={() => optionClick('삭제')}>삭제</button>
            </S.Li>
          ) : (
            <S.Li>
              <button onClick={() => optionClick('신고하기')}>신고하기</button>
            </S.Li>
          )}
        </S.Ul>
      </S.ModalBg>
    </>
  );
};

export default CommentModal;
