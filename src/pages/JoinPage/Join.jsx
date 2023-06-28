import React, { useState } from 'react';
import * as S from './Join.style';
import ProfileFormInput from '../../components/common/Input/ProfileFormInput';

import { useNavigate } from 'react-router-dom';

const Join = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  let isActivated = false;
  if (error.email === 'noError' && error.password === 'noError') {
    isActivated = true;
  }

  const handleClick = () => {
    navigate('/join/profile', { state: formData });
  };

  return (
    <S.Main>
      <S.LayoutWrapper>
        <S.Form>
          <S.Title>이메일로 회원가입</S.Title>
          <ProfileFormInput
            id='email'
            label='이메일'
            formData={formData}
            setFormData={setFormData}
            error={error}
            setError={setError}
            inputProps={{
              type: 'email',
              placeholder: '이메일 주소를 입력해 주세요.',
              autoComplete: 'off',
            }}
          />
          <ProfileFormInput
            id='password'
            label='비밀번호'
            formData={formData}
            setFormData={setFormData}
            error={error}
            setError={setError}
            inputProps={{
              type: 'password',
              placeholder: '비밀번호를 설정해 주세요.',
              autoComplete: 'off',
            }}
          />
          <S.NextBtn onClick={handleClick} mode={isActivated ? 'default' : 'disabled'} size='lg'>
            다음
          </S.NextBtn>
        </S.Form>
      </S.LayoutWrapper>
    </S.Main>
  );
};

export default Join;
