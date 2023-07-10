import React, { useEffect, useState } from 'react';
import * as S from './ProfileSetting.style';
import ProfileForm from '../../components/Profile/ProfileForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { join } from '../../api/auth';
import useImageUpload from '../../hooks/useImageUpload';

const ProfileSetting = () => {
  const [formData, setFormData] = useState({
    accountname: '',
    username: '',
    intro: '',
  });
  const [error, setError] = useState({
    accountname: '',
    username: '',
    intro: '',
  });
  const { state } = useLocation();
  const navigate = useNavigate();
  const { img, onUpload } = useImageUpload();

  let isActivated = false;
  if (error.username === 'noError' && error.accountname === 'noError') isActivated = true;

  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/join');
  }, []);

  const handleClick = async () => {
    try {
      const image = img === '' ? 'http://api.mandarin.weniv.co.kr/1687866323147.png' : img;

      const data = await join(state, formData, image);
      if (data.message === '회원가입 성공') {
        navigate('/login/email');
      } else {
        navigate('/join');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <S.Main>
      <S.LayoutWrapper>
        <S.Form onSubmit={(e) => e.preventDefault()}>
          <S.Title>프로필 설정</S.Title>
          <S.Desc>나중에 얼마든지 변경할 수 있습니다.</S.Desc>
          <ProfileForm
            formData={formData}
            setFormData={setFormData}
            img={img}
            onUpload={onUpload}
            error={error}
            setError={setError}
          />
          <S.StartBtn mode={isActivated ? 'default' : 'disabled'} size='lg' onClick={handleClick}>
            시작하기
          </S.StartBtn>
        </S.Form>
      </S.LayoutWrapper>
    </S.Main>
  );
};

export default ProfileSetting;
