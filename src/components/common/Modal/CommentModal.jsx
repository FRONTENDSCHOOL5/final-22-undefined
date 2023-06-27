import React, { useRef, useState, useContext, useEffect } from 'react';
import * as S from './Modal.style';
import { AuthContextStore } from '../../../context/AuthContext';
import { reportComment } from '../../../api/comment';
import { deleteComment } from '../../../api/comment';
import ReportModal from './ReportModal';

const CommentModal = ({ onClose, commentId, commentList, postId, commentAuthor, setCommentList, setCommentCnt }) => {
  const modalRef = useRef();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    // 댓글 작성자와 현재 사용자의 계정명 비교하여 isLoginUser 값을 설정
    setIsLoginUser(userAccountname === commentAuthor); // commentId는 댓글 작성자의 계정명으로 가정
  }, [userAccountname, commentAuthor]);

  const optionClick = async (option) => {
    if (option === '삭제') {
      await fetchDelete();
      setCommentList(commentList.filter((comment) => comment.id !== commentId));
      setCommentCnt((prev) => prev - 1);
      onClose();
    } else if (option === '신고하기') {
      setSelectedOption(option);
    }
  };

  const closeModal = (option) => {
    if (option === '확인') {
      fetchReport();
      console.log('신고하기 완료!');
      onClose();
    }
  };

  const fetchDelete = async () => {
    console.log('postId 값:', postId);
    console.log('commentId 값:', commentId);
    try {
      await deleteComment(postId, commentId, userToken);
    } catch (error) {
      console.log('댓글 삭제 오류:', error);
      return { success: false, error: '댓글 삭제 오류' };
    }
  };

  const fetchReport = async () => {
    try {
      await reportComment(postId, commentId, userToken);
    } catch (error) {
      console.log(error);
    }
  };

  // ReportModal 컴포넌트 신고 확인 메시지 렌더링
  const renderAlertModal = () => {
    if (selectedOption === '신고하기') {
      return (
        <ReportModal
          message='신고가 완료되었습니다!'
          onClose={closeModal}
          button={'확인'}
          buttonFontColor={'#F26E22'}
        />
      );
    }

    return null;
  };

  const clickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <>
      <S.ModalBg ref={modalRef} onClick={clickOutside} style={{ pointerEvents: selectedOption ? 'none' : 'auto' }}>
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
      {renderAlertModal()}
    </>
  );
};

export default CommentModal;
