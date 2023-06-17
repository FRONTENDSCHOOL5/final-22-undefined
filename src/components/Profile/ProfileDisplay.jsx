import React from 'react';
import Ellipse from '../../assets/Ellipse-1.png';
import * as S from './ProfileDisplay.style';

const ProfileDisplay = () => {
  return (
    <S.Header>
      <S.Container>
        <S.ProfileImg src={Ellipse} alt='OO의 프로필 사진' />
        <S.UserName>크롱</S.UserName>
        <S.AccountName>{`@ abc123`}</S.AccountName>
        <S.Intro className='sl-ellipsis'>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장입니다</S.Intro>
        <S.FollwerLink>
          <strong>10</strong>
          <S.Type>followers</S.Type>
        </S.FollwerLink>
        <S.FollowingLink>
          <strong>128</strong>
          <S.Type>followings</S.Type>
        </S.FollowingLink>
        <S.BtnContainer>
          <S.ChatBtn>
            <span className='a11y-hidden'>상대방에게 채팅 보내기</span>
          </S.ChatBtn>
          <S.FollowBtn>팔로우</S.FollowBtn>
          <S.ShareBtn>
            <span className='a11y-hidden'>링크 공유하기</span>
          </S.ShareBtn>
        </S.BtnContainer>
      </S.Container>
    </S.Header>
  );
};

export default ProfileDisplay;
