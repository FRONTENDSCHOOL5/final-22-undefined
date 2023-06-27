import React, { useContext, useEffect, useState } from 'react';
import SaveHeader from '../../components/common/Header/SaveHeader';
import * as S from './ProfileEdit.style';
import ProfileForm from '../../components/Profile/ProfileForm';
import { AuthContextStore } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { editProfile, getMyInfo } from '../../api/profile';
import useImageUpload from '../../hooks/useImageUpload';

const ProfileEdit = () => {
  const { userToken, setUserAccountname } = useContext(AuthContextStore);
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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { img, onUpload, setImg } = useImageUpload();

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
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await getMyInfo(userToken);
        const { username, accountname, intro, image } = data.user;
        setFormData({ accountname, username, intro });
        setImg(image);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetch();
  }, [userToken]);

  // 버튼 클릭 시 정보 저장
  const handleClick = async () => {
    try {
      setIsLoading(true);
      const data = await editProfile(userToken, formData, img);
      if (!data.user) throw Error('잘못된 접근입니다.');
      setIsLoading(false);
      localStorage.setItem('accountname', formData.accountname);
      setUserAccountname(formData.accountname);
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
            onUpload={onUpload}
            error={error}
            setError={setError}
          />
        </S.Form>
      </S.Main>
    </S.LayoutWrapper>
  );
};

export default ProfileEdit;
