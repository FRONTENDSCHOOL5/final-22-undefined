import React from 'react';
import Ellipse from '../../../assets/Ellipse-1.png';
import * as S from './ImgInput.style';

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];

const ImgInput = ({ img, setImg }) => {
  const handleChange = async (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    console.log(file);
    const fileExtenstion = file.name.split('.')[1].toLowerCase();

    if (!ALLOWED_EXTENSIONS.includes(`.${fileExtenstion}`)) return;

    const formData = new FormData();
    formData.append('image', event.target.files[0]);

    try {
      const response = await fetch('https://api.mandarin.weniv.co.kr/image/uploadfile', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setImg(data.filename);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <S.Label htmlFor='profileImg'>
        <S.ProfileImg src={img === '' ? Ellipse : `https://api.mandarin.weniv.co.kr/${img}`} alt='프로필 이미지' />
      </S.Label>
      <S.UploadInput id='profileImg' type='file' className='a11y-hidden' onChange={handleChange} accept='image/*' />
    </>
  );
};

export default ImgInput;
