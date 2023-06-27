import React from 'react';
import Ellipse from '../../../assets/Ellipse-1.png';
import * as S from './ImgInput.style';

const ImgInput = ({ img, onUpload }) => {
  const handleChange = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    onUpload(file);
  };

  return (
    <>
      <S.Label htmlFor='profileImg'>
        <S.ProfileImg src={img === '' ? Ellipse : img} alt='프로필 이미지' />
      </S.Label>
      <S.UploadInput id='profileImg' type='file' className='a11y-hidden' onChange={handleChange} accept='image/*' />
    </>
  );
};

export default ImgInput;
