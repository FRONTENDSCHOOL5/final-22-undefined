import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import Button from '../../components/common/Button/Button';
import ProfileForm from '../../components/Profile/ProfileForm';
import { useLocation, useNavigate } from 'react-router-dom';

const Main = styled.main``;

const LayoutWrapper = styled(Wrapper)`
  padding: 0 34px;
`;

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
  const { state } = useLocation();
  const navigate = useNavigate();

  let isActivated = false;
  if (error.username === 'noError' && error.accountname === 'noError') isActivated = true;

  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/join');
  }, []);

  // 프로필 수정 페이지에서 버튼이 form 밖에 있어서 onSubmit으로 하지 않고 onClick으로 구현
  const handleClick = async () => {
    try {
      const response = await fetch('https://api.mandarin.weniv.co.kr/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: { ...state, ...formData, image: img } }),
      });

      const data = await response.json();
      if (data.message === '회원가입 성공') {
        navigate('/');
      } else {
        navigate('/join');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Main>
      <LayoutWrapper>
        <Form onSubmit={(e) => e.preventDefault()}>
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
          <StartBtn mode={isActivated ? 'default' : 'disabled'} size='lg' onClick={handleClick}>
            감귤마켓 시작하기
          </StartBtn>
        </Form>
      </LayoutWrapper>
    </Main>
  );
};

export default ProfileSetting;
