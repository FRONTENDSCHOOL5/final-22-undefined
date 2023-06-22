import React, { useContext, useEffect, useState } from 'react';
import SaveHeader from '../../components/common/Header/SaveHeader';
import * as S from './ProfileEdit.style';
import ProfileForm from '../../components/Profile/ProfileForm';
import { AuthContextStore } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const { userToken } = useContext(AuthContextStore);
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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // 버튼 활성화
  let isActivated = false;
  if (
    (error.username === '' || error.username === 'noError') &&
    (error.accountname === '' || error.accountname === 'noError') &&
    !isLoading
  ) {
    isActivated = true;
  }

  // 페이지 로드시 사용자 정보 가져오기
  useEffect(() => {
    const getInfo = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.mandarin.weniv.co.kr/user/myinfo', {
          // token을 그냥 userToken으로 넣어주면 오류 생김 ... 나중에 체크해볼 것
          headers: { Authorization: `Bearer ${userToken}` },
        });

        const data = await response.json();
        const { username, accountname, intro, image } = data.user;
        setFormData({ accountname, username, intro });
        setImg(image);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    getInfo();
  }, [userToken]);

  // 버튼 클릭 시 정보 저장
  const handleClick = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.mandarin.weniv.co.kr/user', {
        method: 'PUT',
        headers: { Authorization: `Bearer ${userToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: { ...formData, image: img } }),
      });

      const data = await response.json();
      if (!data.user) throw Error('잘못된 접근입니다.');
      setIsLoading(false);
      localStorage.setItem('accountname', formData.accountname);
      navigate('/profile');
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };

  return (
    <S.LayoutWrapper>
      <SaveHeader name='저장' mode={isActivated ? 'default' : 'disabled'} onClick={handleClick} />
      <S.Title className='a11y-hidden'>프로필 수정 페이지</S.Title>
      <S.Main>
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
      </S.Main>
    </S.LayoutWrapper>
  );
};

export default ProfileEdit;
