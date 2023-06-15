import React from 'react';
import SaveHeader from '../../components/common/Header/SaveHeader';
import * as S from './ProfileEdit.style';

const ProfileEdit = () => {
  return (
    <S.Main>
      <S.LayoutWrapper>
        <S.Title className='a11y-hidden'>프로필 수정 페이지</S.Title>
        <SaveHeader name='저장' mode='default' />
        <S.Form></S.Form>
      </S.LayoutWrapper>
    </S.Main>
  );
};

export default ProfileEdit;
