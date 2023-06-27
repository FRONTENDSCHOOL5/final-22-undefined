import React, { useContext } from 'react';
import * as S from './ProfileDisplay.style';
import { AuthContextStore } from '../../context/AuthContext';
import { Link, useParams } from 'react-router-dom';
import ProfileSkeleton from '../Skeleton/ProfileSkeleton';
import { followApi } from '../../api/follow';
// import PostUserProfileImg from '../Post/PostUserProfileImg';

const ProfileDisplay = ({ userInfo, setUserInfo, isLoading }) => {
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const { accountname } = useParams();

  // 현재 프로필의 accountname
  const userId = accountname ? accountname : userAccountname;
  // 현재 프로필에 해당하는 사람이 로그인된 유저랑 같은 사람인지 여부
  const isLoginUser = userId === userAccountname;
  const { isfollow } = userInfo;

  const handleFollow = async () => {
    try {
      await followApi(accountname, isfollow, userToken);

      isfollow
        ? setUserInfo((prev) => ({ ...prev, isfollow: false, followerCount: prev.followerCount - 1 }))
        : setUserInfo((prev) => ({ ...prev, isfollow: true, followerCount: prev.followerCount + 1 }));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <S.Header>
      <S.Container>
        {isLoading || !userInfo.image ? (
          <ProfileSkeleton />
        ) : (
          <>
            <S.ProfileImg src={userInfo.image} alt={`${userInfo.username}의 프로필 사진`} />
            {/* <PostUserProfileImg size='110px' userProfileImg={userInfo.image} /> */}
            <S.UserName>{userInfo.username}</S.UserName>
            <S.AccountName>{`@ ${userInfo.accountname}`}</S.AccountName>
            <S.Intro>{userInfo.intro}</S.Intro>
            <S.FollowerLink to={`/follow/${userId}/follower`}>
              <strong>{userInfo.followerCount}</strong>
              <S.Type>followers</S.Type>
            </S.FollowerLink>
            <S.FollowingLink to={`/follow/${userId}/following`}>
              <strong>{userInfo.followingCount}</strong>
              <S.Type>followings</S.Type>
            </S.FollowingLink>
          </>
        )}
        {isLoginUser ? (
          <S.BtnContainer>
            <Link to='/profile/edit'>
              <S.EditProfileBtn mode='active'>프로필 수정</S.EditProfileBtn>
            </Link>
            <Link to='/product'>
              <S.AddProductBtn mode='active'>상품 등록</S.AddProductBtn>
            </Link>
          </S.BtnContainer>
        ) : (
          <S.BtnContainer>
            <S.ChatBtn>
              <span className='a11y-hidden'>상대방에게 채팅 보내기</span>
            </S.ChatBtn>
            <S.FollowBtn onClick={handleFollow} mode={isfollow ? 'active' : 'default'}>
              {isfollow ? '언팔로우' : '팔로우'}
            </S.FollowBtn>
            <S.ShareBtn>
              <span className='a11y-hidden'>링크 공유하기</span>
            </S.ShareBtn>
          </S.BtnContainer>
        )}
      </S.Container>
    </S.Header>
  );
};

export default ProfileDisplay;
