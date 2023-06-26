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
  padding-bottom: 20px;
  margin-bottom: 50px;
`;

const UserInfoSect = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 8px;
`;

const PostUserProfileImg = styled.div`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border-radius: 20px;
  ${loadingAnimation}
`;
const UserNameInfo = styled.div`
  border-radius: 8px;
`;

const InfoName = styled.div`
  width: 140px;
  height: 15px;
  border-radius: 12px;
  margin-bottom: 6px;
  ${loadingAnimation}
`;

const InfoAccount = styled.div`
  width: 100px;
  height: 10px;
  border-radius: 12px;
  ${loadingAnimation}
`;

const UserContentSect = styled.div`
  padding-left: 54px;
`;

const UserPostText = styled.div`
  margin-bottom: 16px;
  border-radius: 16px;
  width: 140px;
  height: 15px;
  ${loadingAnimation}
`;

const UserPostImg = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 16px;
  overflow: hidden;
  object-fit: cover;
  ${loadingAnimation}
`;

const LikeAndComment = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 16px;
`;

const LikeBtn = styled.div`
  border-radius: 12px;

  &::before {
    content: '';
    width: 20px;
    margin-right: 6px;
    display: inline-block;
    vertical-align: bottom;
  }
  ${loadingAnimation}
`;

const TodayDate = styled.div`
  width: 100px;
  height: 10px;
  border-radius: 8px;
  ${loadingAnimation}
`;
