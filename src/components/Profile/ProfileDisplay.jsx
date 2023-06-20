import React, { useContext } from 'react';
import Ellipse from '../../assets/Ellipse-1.png';
import * as S from './ProfileDisplay.style';
import { AuthContextStore } from '../../context/AuthContext';
import { Link, useParams } from 'react-router-dom';
// import PostUserProfileImg from '../Post/PostUserProfileImg';

const ProfileDisplay = ({ userInfo }) => {
  const { userAccountname } = useContext(AuthContextStore);
  const { accountname } = useParams();

  // 현재 프로필의 accountname
  const userId = accountname ? accountname : JSON.parse(userAccountname);
  // 현재 프로필에 해당하는 사람이 로그인된 유저랑 같은 사람인지 여부
  const isLoginUser = userId === JSON.parse(userAccountname);
  console.log(userId);
  console.log('accountname', accountname);
  return (
    <S.Header>
      <S.Container>
        <S.ProfileImg
          src={
            userInfo.image === 'http://146.56.183.55:5050/Ellipse.png'
              ? Ellipse
              : `https://api.mandarin.weniv.co.kr/${userInfo.image}`
          }
          alt={`${userInfo.username}의 프로필 사진`}
        />
        {/* <PostUserProfileImg size='110px' userProfileImg={userInfo.image} /> */}
        <S.UserName>{userInfo.username}</S.UserName>
        <S.AccountName>{`@ ${userInfo.accountname}`}</S.AccountName>
        <S.Intro className='sl-ellipsis'>{userInfo.intro}</S.Intro>
        <S.FollowerLink to={`/follow/${userId}/follower`}>
          <strong>{userInfo.followerCount}</strong>
          <S.Type>followers</S.Type>
        </S.FollowerLink>
        <S.FollowingLink to={`/follow/${userId}/following`}>
          <strong>{userInfo.followingCount}</strong>
          <S.Type>followings</S.Type>
        </S.FollowingLink>
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
            <S.FollowBtn>팔로우</S.FollowBtn>
            {/* <S.FollowBtn mode='active'>언팔로우</S.FollowBtn> */}
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
