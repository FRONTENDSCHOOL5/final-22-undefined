import React, { useState } from 'react';
<<<<<<< HEAD
import ModalButtonImg from '../../assets/icon/s-icon-more-vertical.svg';
=======
import ModalButtonImg from '../../assets/icon/icon-more-vertical.png';
>>>>>>> 92424a5 (move: style 파일 전체 분리)
import * as S from './PostCommentList.style';
import PostUserProfileImg from './PostUserProfileImg';
import CommentModal from '../common/Modal/CommentModal';

const PostCommentList = ({ commentList, postId, setCommentList, setCommentCnt }) => {
  //작성 경과 시간 함수
  const calcUploadTime = (date) => {
    const TEN_SECOND = 10 * 1000;
    const A_MINUTE = 60 * 1000;
    const A_HOUR = 60 * A_MINUTE;
    const A_DAY = 24 * A_HOUR;
    const A_WEEK = 7 * A_DAY;

    const time = new Date(date);
    const diff = new Date() - time;
    // console.log(date);
    // console.log(time);
    if (diff < TEN_SECOND) return `방금 전`;
    if (diff < A_MINUTE) return `${Math.floor(diff / 1000)}초 전`;
    if (diff < A_HOUR) return `${Math.floor(diff / 1000 / 60)}분 전`;
    if (diff < A_DAY) return `${Math.floor(diff / 1000 / 60 / 60)}시간 전`;
    if (diff < A_WEEK) return `${Math.floor(diff / 1000 / 60 / 60 / 24)}일 전`;
    return date.toLocaleString('ko-KR', {
      hour12: false,
      dateStyle: 'medium',
    });
  };

  // 댓글 모달 관련
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const openModal = (commentId) => {
    setIsModalOpen(true);
    setSelectedCommentId(commentId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCommentId(null);
  };

  return (
    <>
      <S.Ul>
        {commentList.length > 0 &&
          commentList.map((comment) => {
            return (
              <S.Li key={comment.id}>
                <S.UserAuth>
                  <S.ProfileLink to={`/profile/${comment.author.accountname}`}>
                    <PostUserProfileImg size={'36px'} userProfileImg={comment.author.image} />
                    <S.Username>{comment.author.username}</S.Username>
                  </S.ProfileLink>
                  <S.UploadTime>{calcUploadTime(comment.createdAt)}</S.UploadTime>
                  {/* 댓글 모달 */}
                  <S.ButtonIcon onClick={() => openModal(comment.id)}>
                    <img src={ModalButtonImg} alt='숨겨진 모달창 나타내기' />
                  </S.ButtonIcon>
                </S.UserAuth>
                <S.PostComment>{comment.content}</S.PostComment>
              </S.Li>
            );
          })}
      </S.Ul>
      {/* 댓글 모달 */}
      {isModalOpen && (
        <CommentModal
          onClose={closeModal}
          commentId={selectedCommentId}
          postId={postId}
          commentAuthor={commentList.find((comment) => comment.id === selectedCommentId)?.author.accountname} // commentList에서 selectedCommentId와 일치하는 댓글 작성자의 accountname을 반환
          setCommentList={setCommentList}
          commentList={commentList}
          setCommentCnt={setCommentCnt}
        />
      )}
    </>
  );
};

export default PostCommentList;
