import React from 'react';
import ImgInput from '../common/Input/ImgInput';
import ProfileFormInput from '../common/Input/ProfileFormInput';

const ProfileForm = ({ formData, setFormData, img, setImg, error, setError }) => {
  return (
    <>
      <ImgInput img={img} setImg={setImg} />
      <ProfileFormInput
        id='username'
        label='사용자 이름'
        formData={formData}
        setFormData={setFormData}
        error={error}
        setError={setError}
        inputProps={{
          type: 'text',
          placeholder: '2~10자 이내여야 합니다.',
        }}
      />
      <ProfileFormInput
        id='accountname'
        label='계정 ID'
        formData={formData}
        setFormData={setFormData}
        error={error}
        setError={setError}
        inputProps={{
          type: 'text',
          placeholder: '영문, 숫자, 특수문자(,),(_)만 사용 가능합니다.',
        }}
      />
      <ProfileFormInput
        id='intro'
        label='소개'
        formData={formData}
        setFormData={setFormData}
        error={error}
        setError={setError}
        inputProps={{
          type: 'text',
          placeholder: '자신과 판매할 상품에 대하여 소개해주세요',
        }}
      />
    </>
  );
};

export default ProfileForm;
