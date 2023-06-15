import React, { useContext, useEffect, useState } from 'react';
import SaveHeader from '../../components/common/Header/SaveHeader';
import * as S from './ProfileEdit.style';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { AuthContextStore } from '../../context/AuthContext';

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

  // 버튼 활성화
  let isActivated = false;
  if (
    (error.username === '' || error.username === 'noError') &&
    (error.accountname === '' || error.accountname === 'noError') &&
    !isLoading
  ) {
    isActivated = true;
  }

  useEffect(() => {
    const getInfo = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.mandarin.weniv.co.kr/user/myinfo', {
          // token을 그냥 userToken으로 넣어주면 오류 생김 ... 나중에 체크해볼 것
          headers: { Authorization: `Bearer ${JSON.parse(userToken)}` },
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

  const handleClick = () => {};

  return (
    <S.Main>
      <S.LayoutWrapper>
        <S.Title className='a11y-hidden'>프로필 수정 페이지</S.Title>
        <SaveHeader name='저장' mode={isActivated ? 'default' : 'disabled'} onClick={handleClick} />
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
