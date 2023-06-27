import styled from 'styled-components';
import loadingAnimation from './LoadingAnimation.style';

export const PostArticle = styled.article`
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 50px;
`;

export const UserInfoSect = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 8px;
`;

export const PostUserProfileImg = styled.div`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border-radius: 20px;
  ${loadingAnimation}
`;
export const UserNameInfo = styled.div`
  border-radius: 8px;
`;

export const InfoName = styled.div`
  width: 140px;
  height: 15px;
  border-radius: 12px;
  margin-bottom: 6px;
  ${loadingAnimation}
`;

export const InfoAccount = styled.div`
  width: 100px;
  height: 10px;
  border-radius: 12px;
  ${loadingAnimation}
`;

export const UserContentSect = styled.div`
  padding-left: 54px;
`;

export const UserPostText = styled.div`
  margin-bottom: 16px;
  border-radius: 16px;
  width: 140px;
  height: 15px;
  ${loadingAnimation}
`;

export const UserPostImg = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 16px;
  overflow: hidden;
  object-fit: cover;
  ${loadingAnimation}
`;

export const LikeAndComment = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 16px;
`;

export const LikeBtn = styled.div`
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

export const TodayDate = styled.div`
  width: 100px;
  height: 10px;
  border-radius: 8px;
  ${loadingAnimation}
`;
