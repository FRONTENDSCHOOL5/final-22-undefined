import React from 'react';
import styled, { css } from 'styled-components';
import MainLayout from '../../components/common/MainLayout/MainLayout';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import './ChatComment.style';

import PostDetail from '../PostPage/PostDetail';
import { Link } from 'react-router-dom';

const ChatTxt = styled(MainLayout)`
  height: 100vh;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.bgGray};
  `}

  div {
    display: inline-block;
    max-width: 240px;
    padding: 12px;
    ${({ theme: { colors } }) => css`
      border: 1px solid ${colors.gray};
    `}
    border-radius: 0 10px 10px 10px;
  }
`;

const Contents = ({ commentList }) => {
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
  return (
    <ChatTxt>
      <PostUserProfileImg />
      <div>
        <p>가입을 축하드립니다!</p>
      </div>
      {commentList && commentList.length > 0 ? (
        <Ul>
          {commentList.map((comment) => (
            <Li key={comment.id}>
              <UserAuth>
                <ProfileLink to={`/profile/${comment.author.accountname}`}>
                  <PostUserProfileImg size={'36px'} userProfileImg={comment.author.image} />
                  <Username>{comment.author.username}</Username>
                </ProfileLink>
                <UploadTime>{calcUploadTime(comment.createdAt)}</UploadTime>
              </UserAuth>
            </Li>
          ))}
        </Ul>
      ) : (
        <p>내용이 없습니다.</p>
      )}
    </ChatTxt>
  );
};

export default Contents;

// 댓글입력
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

const Username = styled.strong`
  display: inline-block;
  margin: 2px 5px 0 0;
  font-weight: 500;
  line-height: 18px;
`;

const UploadTime = styled.span`
  font-size: 10px;
  line-height: 13px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.txtColor};
  &::before {
    content: '·';
    margin-right: 4px;
  }
`;
