import React from 'react';
import styled from 'styled-components';
import uploadIcon from '../../../assets/icon/icon-upload.png';
import Ellipse from '../../../assets/Ellipse-1.png';

const Label = styled.label`
  width: 110px;
  height: 110px;
  position: relative;
  display: block;
  margin: 0 auto 30px;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${({ theme }) => `${theme.colors.primary} url(${uploadIcon}) no-repeat center`};
  }
`;

const ProfileImg = styled.img`
  object-fit: cover;
  height: 100%;
  border-radius: 50%;
`;

const UploadInput = styled.input``;

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];

const ImgInput = ({ img, setImg }) => {
  const handleChange = async (event) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
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
      <Label htmlFor='profileImg'>
        <ProfileImg src={img === '' ? Ellipse : `https://api.mandarin.weniv.co.kr/${img}`} alt='프로필 이미지' />
      </Label>
      <UploadInput id='profileImg' type='file' className='a11y-hidden' onChange={handleChange} accept='image/*' />
    </>
  );
};

export default ImgInput;
