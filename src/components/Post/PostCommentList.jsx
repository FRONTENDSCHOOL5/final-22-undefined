import React, { useState } from 'react';
import ModalButtonImg from '../../assets/icon/icon-more-vertical.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PostUserProfileImg from './PostUserProfileImg';
import CommentModal from '../common/Modal/CommentModal';

const PostCommentList = ({ commentList, postId, posts, setPosts }) => {
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
  const [comments, setComments] = useState(commentList);

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
      <Ul>
        {commentList.length > 0 &&
          commentList.map((comment) => {
            return (
              <Li key={comment.id}>
                <UserAuth>
                  <ProfileLink to={`/profile/${comment.author.accountname}`}>
                    <PostUserProfileImg size={'36px'} userProfileImg={comment.author.image} />
                  </ProfileLink>
                  <NameLink to={`/profile/${comment.author.accountname}`}>
                    <Username>{comment.author.username}</Username>
                  </NameLink>
                  <UploadTime>{calcUploadTime(comment.createdAt)}</UploadTime>
                  {/* 댓글 모달 */}
                  <ButtonIcon onClick={() => openModal(comment.id)}>
                    <img src={ModalButtonImg} alt='숨겨진 모달창 나타내기' />
                  </ButtonIcon>
                </UserAuth>
                <PostComment>{comment.content}</PostComment>
              </Li>
            );
          })}
      </Ul>
      {/* 댓글 모달 */}
      {isModalOpen && (
        <CommentModal
          onClose={closeModal}
          commentId={selectedCommentId}
          comments={commentList}
          postId={postId}
          posts={posts}
          setPosts={setPosts}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PostCommentList;

const Ul = styled.ul``;
const Li = styled.li`
  position: relative;
  & + & {
    margin-top: 40px;
  }
`;
const UserAuth = styled.div`
  display: flex;
`;
const ProfileLink = styled(Link)``;
const NameLink = styled(Link)`
  margin: 4px 5px 0 0;
`;

const Username = styled.strong`
  font-weight: 500;
  /* font-size: 14px; */
  line-height: 18px;
`;

const UploadTime = styled.span`
  font-size: 10px;
  line-height: 13px;
  margin-top: 6.5px;
  color: ${({ theme }) => theme.colors.txtColor};
  &::before {
    content: '·';
    margin-right: 4px;
  }
`;

const PostComment = styled.p`
  /* font-size: 14px; */
  padding-left: 48px;
`;
// 모달 버튼 아이콘
const ButtonIcon = styled.button`
  width: 18px;
  position: absolute;
  gap: 12px;
  top: 5px;
  right: 0;
`;
