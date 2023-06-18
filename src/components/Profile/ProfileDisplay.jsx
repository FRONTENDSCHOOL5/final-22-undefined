import React, { useContext } from 'react';
import Ellipse from '../../assets/Ellipse-1.png';
import * as S from './ProfileDisplay.style';
import { AuthContextStore } from '../../context/AuthContext';
import { Link, useParams } from 'react-router-dom';

const ProfileDisplay = () => {
  const { userAccountname } = useContext(AuthContextStore);
  const { accountname } = useParams();
  const { type } = useParams();

  // 현재 프로필의 accountname
  const userId = accountname ? accountname : JSON.parse(userAccountname);
  // 현재 프로필에 해당하는 사람이 로그인된 유저랑 같은 사람인지 여부
  const isLoginUser = userId === JSON.parse(userAccountname);

  return (
    <S.Header>
      <S.Container>
        <S.ProfileImg src={Ellipse} alt='OO의 프로필 사진' />
        <S.UserName>크롱</S.UserName>
        <S.AccountName>{`@ ${userId}`}</S.AccountName>
        <S.Intro className='sl-ellipsis'>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장입니다</S.Intro>
        <S.FollowerLink to={`/follow/${userId}/follower`}>
          <strong>10</strong>
          <S.Type>followers</S.Type>
        </S.FollowerLink>
        <S.FollowingLink to={`/follow/${userId}/following`}>
          <strong>128</strong>
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
