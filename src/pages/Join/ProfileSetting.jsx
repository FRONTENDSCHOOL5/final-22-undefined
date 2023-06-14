import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import Button from '../../components/common/Button/Button';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

const Main = styled.main``;

const Form = styled.form``;

const Title = styled.h1`
  margin: 30px 0 12px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const Desc = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.txtColor};
  margin-bottom: 30px;
`;

const StartBtn = styled(Button)`
  margin-top: 30px;
`;

const ProfileSetting = () => {
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
    <Main>
      <Wrapper>
        <Form>
          <Title>프로필 설정</Title>
          <Desc>나중에 얼마든지 변경할 수 있습니다.</Desc>
          <ProfileForm
            formData={formData}
            setFormData={setFormData}
            img={img}
            setImg={setImg}
            error={error}
            setError={setError}
          />
          <StartBtn mode='default' size='lg'>
            감귤마켓 시작하기
          </StartBtn>
        </Form>
      </Wrapper>
    </Main>
  );
};

export default ProfileSetting;
