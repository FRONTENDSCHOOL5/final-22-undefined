import React from 'react';
import styled from 'styled-components';
import loadingAnimation from './LoadingAnimation.style';

const PostItemSkeleton = () => {
  return (
    <PostArticle>
      <UserInfoSect>
        <PostUserProfileImg />
        <UserNameInfo>
          <InfoName />
          <InfoAccount />
        </UserNameInfo>
      </UserInfoSect>

      <UserContentSect>
        <UserPostText />
        <UserPostImg />
        <LikeAndComment>
          <LikeBtn />
        </LikeAndComment>
        <TodayDate />
      </UserContentSect>
    </PostArticle>
  );
};

export default PostItemSkeleton;

const PostArticle = styled.article`
  position: relative;
`;

const UserInfoSect = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 8px;

  ${loadingAnimation}
`;

const PostUserProfileImg = styled.div`
  border-radius: 8px;
`;
const UserNameInfo = styled.div`
  flex-grow: 1;
  border-radius: 8px;

  ${loadingAnimation}
`;

const InfoName = styled.div`
  border-radius: 8px;

  margin-bottom: 6px;
  ${loadingAnimation}
`;
const InfoAccount = styled.div`
  font-size: 12px;
  border-radius: 8px;

  ${loadingAnimation}
`;

const UserContentSect = styled.div`
  padding-left: 54px;
  border-radius: 8px;

  ${loadingAnimation}
`;

const UserPostText = styled.div`
  margin-bottom: 16px;
  word-break: break-all;
  line-height: 20px;
  ${loadingAnimation}
`;

const UserPostImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  overflow: hidden;
  object-fit: cover;
  ${loadingAnimation}
`;

const LikeAndComment = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 16px;
  ${loadingAnimation}
`;

const LikeBtn = styled.div`
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 6px;
    display: inline-block;
    vertical-align: bottom;
  }
  ${loadingAnimation}
`;

const TodayDate = styled.p`
  font-size: 10px;
  ${loadingAnimation}
`;
