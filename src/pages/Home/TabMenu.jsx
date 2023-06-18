import React from 'react';
import * as S from './TabMenu.style';

const TabMenu = () => {
  return (
    <S.Footer>
      <S.MenuList>
        <S.Menus>
          <S.HomeIcon href='#'>홈</S.HomeIcon>
        </S.Menus>
        <S.Menus>
          <S.ChatIcon href='#'>채팅</S.ChatIcon>
        </S.Menus>
        <S.Menus>
          <S.PostIcon href='#'>게시물 작성</S.PostIcon>
        </S.Menus>
        <S.Menus>
          <S.ProfileIcon href='#'>프로필</S.ProfileIcon>
        </S.Menus>
      </S.MenuList>
    </S.Footer>
  );
};

export default TabMenu;
