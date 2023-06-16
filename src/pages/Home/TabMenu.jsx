import React from 'react';
import * as S from './TabMenu.style';

import home from '../../assets/icon/icon-home.png';
import chat from '../../assets/icon/icon-message-circle.png';
import post from '../../assets/icon/icon-edit.png';
import profile from '../../assets/icon/icon-user.png';

const TabMenu = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Li>
          <a href='#'>
            <S.IMG src={home} alt='위는 삼각형 아래는 사각형인 문이 달린 집모양의 아이콘' />
            <S.P>홈</S.P>
          </a>
        </S.Li>
        <S.Li>
          <a href='#'>
            <S.IMG src={chat} alt='왼쪽으로 꼬리가 나있는 말풍선모양의 아이콘' />
            <S.P>채팅</S.P>
          </a>
        </S.Li>
        <S.Li>
          <a href='#'>
            <S.IMG src={post} alt='라운드사각형 안에 십자가 모양의 아이콘' />
            <S.P>게시물 작성</S.P>
          </a>
        </S.Li>
        <S.Li>
          <a href='#'>
            <S.IMG src={profile} alt='원 밑에 반원형태를 그려서 사람모양을 만든 아이콘' />
            <S.P>프로필</S.P>
          </a>
        </S.Li>
      </S.Wrap>
    </S.Container>
  );
};

export default TabMenu;
