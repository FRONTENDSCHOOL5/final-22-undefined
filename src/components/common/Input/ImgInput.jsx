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
`;

const UploadInput = styled.input``;

const ImgInput = ({ img, setImg }) => {
  return (
    <>
      <Label htmlFor='profileImg'>
        <ProfileImg src={Ellipse} alt='프로필 이미지' />
      </Label>
      <UploadInput id='profileImg' type='file' className='a11y-hidden' />
    </>
  );
};

export default ImgInput;
