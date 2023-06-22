import React, { useContext } from 'react';
import * as S from '../Profile/ProfileDisplay.style';
import { AuthContextStore } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import loadingAnimation from './LoadingAnimation.style';

const ProfileImg = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 auto 16px;

  ${loadingAnimation}
`;
const UserName = styled.div`
  width: 155px;
  height: 20px;
  margin: 0 auto 6px;
  border-radius: 10px;

  ${loadingAnimation}
`;

const AccountName = styled.div`
  width: 107px;
  height: 14px;
  margin: 0 auto 16px;
  border-radius: 10px;

  ${loadingAnimation}
`;

const Intro = styled.div`
  width: 200px;
  height: 18px;
  margin: 0 auto 24px;
  border-radius: 10px;

  ${loadingAnimation}
`;

const ProfileSkeleton = () => {
  const { userAccountname } = useContext(AuthContextStore);
  const { accountname } = useParams();

  // 현재 프로필의 accountname
  const userId = accountname ? accountname : JSON.parse(userAccountname);

  return (
    <>
      <ProfileImg />
      <UserName />
      <AccountName />
      <Intro />
      <S.FollowerLink to={`/follow/${userId}/follower`}>
        <strong>0</strong>
        <S.Type>followers</S.Type>
      </S.FollowerLink>
      <S.FollowingLink to={`/follow/${userId}/following`}>
        <strong>0</strong>
        <S.Type>followings</S.Type>
      </S.FollowingLink>
    </>
  );
};

export default ProfileSkeleton;
