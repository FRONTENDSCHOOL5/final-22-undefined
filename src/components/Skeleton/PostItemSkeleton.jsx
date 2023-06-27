import React from 'react';
import * as S from './PostItemSkeleton.style';

const PostItemSkeleton = () => {
  return (
    <S.PostArticle>
      <S.UserInfoSect>
        <S.PostUserProfileImg />
        <S.UserNameInfo>
          <S.InfoName />
          <S.InfoAccount />
        </S.UserNameInfo>
      </S.UserInfoSect>

      <S.UserContentSect>
        <S.UserPostText />
        <S.UserPostImg />
        <S.LikeAndComment>
          <S.LikeBtn />
          <S.LikeBtn />
        </S.LikeAndComment>
        <S.TodayDate />
      </S.UserContentSect>
    </S.PostArticle>
  );
};

export default PostItemSkeleton;
