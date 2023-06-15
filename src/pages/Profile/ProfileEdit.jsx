import React, { useState } from 'react';
import SaveHeader from '../../components/common/Header/SaveHeader';
import * as S from './ProfileEdit.style';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    accountname: '',
    username: '',
    intro: '',
  });
  const [img, setImg] = useState('');
  const [error, setError] = useState({
    accountname: '',
    username: '',
    intro: '',
  });
  return (
    <S.Main>
      <S.LayoutWrapper>
        <S.Title className='a11y-hidden'>프로필 수정 페이지</S.Title>
        <SaveHeader name='저장' mode='default' />
        <S.Form>
          <ProfileForm
            formData={formData}
            setFormData={setFormData}
            img={img}
            setImg={setImg}
            error={error}
            setError={setError}
          />
        </S.Form>
      </S.LayoutWrapper>
    </S.Main>
  );
};

export default ProfileEdit;
