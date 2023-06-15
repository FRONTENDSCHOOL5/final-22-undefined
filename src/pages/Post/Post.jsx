import React, { useState } from 'react';
import styled from 'styled-components';
import uploadIcon from '../../assets/icon/icon-upload.png';
import Ellipse from '../../assets/Ellipse-1.png';

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];
const Post = () => {
  const [imgName, setImgName] = useState('');

  const handleImgInput = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    console.log(file.name.split('.'));
    const fileExtenstion = file.name.split('.').slice(-1)[0].toLowerCase();
    console.log(fileExtenstion);
    if (!ALLOWED_EXTENSIONS.includes(`.${fileExtenstion}`)) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('https://api.mandarin.weniv.co.kr/image/uploadfile', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setImgName(data.filename);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <img
        style={{ width: '50%' }}
        src={imgName === '' ? Ellipse : `https://api.mandarin.weniv.co.kr/${imgName}`}
        alt='게시글 업로드 이미지'
      />
      <Label htmlFor='postImg'></Label>
      <input className='a11y-hidden' type='file' id='postImg' onChange={handleImgInput} accept='image/*' />
    </>
  );
};

export default Post;

const Label = styled.label`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => `${theme.colors.primary} url(${uploadIcon}) no-repeat center`};
`;
