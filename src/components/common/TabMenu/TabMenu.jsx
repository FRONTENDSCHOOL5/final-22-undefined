import React from 'react';
import * as S from './TabMenu.style';

import home from '../../../assets/icon/icon-home.svg';
import chat from '../../../assets/icon/icon-message-circle.svg';
import post from '../../../assets/icon/icon-edit.svg';
import profile from '../../../assets/icon/icon-user.svg';
import homeFill from '../../../assets/icon/icon-home-fill.svg';
import chatFill from '../../../assets/icon/icon-message-circle-fill.svg';
import profileFill from '../../../assets/icon/icon-user-fill.svg';
import foot from '../../../assets/icon/icon-footFill.svg';
import footFill from '../../../assets/icon/icon-foot.svg';

const TabMenu = ({ active }) => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Li>
          <S.StyledLink to='/home' id='0' active={active}>
            <S.IMG src={active === '0' ? homeFill : home} alt='위는 삼각형 아래는 사각형인 문이 달린 집모양의 아이콘' />
            <S.P>홈</S.P>
          </S.StyledLink>
        </S.Li>
        <S.Li>
          <S.StyledLink to='/chat' id='1' active={active}>
            <S.IMG src={active === '1' ? chatFill : chat} alt='왼쪽으로 꼬리가 나있는 말풍선모양의 아이콘' />
            <S.P>채팅</S.P>
          </S.StyledLink>
        </S.Li>
        <S.Li>
          <S.StyledLink to='/post/upload' id='2' active={active}>
            <S.IMG src={post} alt='라운드사각형 안에 십자가 모양의 아이콘' />
            <S.P>게시물 작성</S.P>
          </S.StyledLink>
        </S.Li>
        <S.Li>
          <S.StyledLink to='/map' id='3' active={active}>
            <S.IMG
              src={active === '3' ? footFill : foot}
              alt='동그라미 4개 아래 모서리 없는 삼각형으로 만들어진 강아지 발바닥 아이콘'
            />
            <S.P>지도</S.P>
          </S.StyledLink>
        </S.Li>
        <S.Li>
          <S.StyledLink to='/profile' id='4' active={active}>
            <S.IMG
              src={active === '4' ? profileFill : profile}
              alt='원 밑에 반원형태를 그려서 사람모양을 만든 아이콘'
            />
            <S.P>프로필</S.P>
          </S.StyledLink>
        </S.Li>
      </S.Wrap>
    </S.Container>
  );
};

export default TabMenu;
