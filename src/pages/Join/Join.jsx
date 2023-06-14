import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import FormInput from '../../components/common/Input/FormInput';
import Button from '../../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

const Main = styled.main``;

const Form = styled.form``;

const Title = styled.h1`
  margin: 30px 0 40px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const NextBtn = styled(Button)`
  margin-top: 30px;
`;

const Join = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });
  console.log(formData);
  const navigate = useNavigate();

  let isActivated = false;
  if (error.email === 'noError' && error.password === 'noError') {
    isActivated = true;
  }

  const handleClick = () => {
    navigate('/join/profile', { state: formData });
  };

  return (
    <Main>
      <Wrapper>
        <Form>
          <Title>이메일로 회원가입</Title>
          <FormInput
            id="email"
            label="이메일"
            formData={formData}
            setFormData={setFormData}
            error={error}
            setError={setError}
            inputProps={{
              type: 'email',
              placeholder: '이메일 주소를 입력해 주세요.',
            }}
          />
          <FormInput
            id="password"
            label="비밀번호"
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
          <NextBtn
            onClick={handleClick}
            mode={isActivated ? 'default' : 'disabled'}
            size="lg"
          >
            다음
          </NextBtn>
        </Form>
      </Wrapper>
    </Main>
  );
};

export default Join;
