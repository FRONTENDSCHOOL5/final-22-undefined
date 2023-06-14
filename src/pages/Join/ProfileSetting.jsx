import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import Button from '../../components/common/Button/Button';

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
  return (
    <Main>
      <Wrapper>
        <Form>
          <Title>프로필 설정</Title>
          <Desc>나중에 얼마든지 변경할 수 있습니다.</Desc>
          <StartBtn mode='default' size='lg' />
        </Form>
      </Wrapper>
    </Main>
  );
};

export default ProfileSetting;
