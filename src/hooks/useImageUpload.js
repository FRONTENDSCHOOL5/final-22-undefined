import { useState } from 'react';
import { uploadImage } from '../api/image';

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];

const useImageUpload = () => {
  const [img, setImg] = useState('');

  const onUpload = async (file) => {
    const fileExtension = file.name.split('.').slice(-1)[0].toLowerCase();

    if (!ALLOWED_EXTENSIONS.includes(`.${fileExtension}`)) {
      console.log('유효한 파일 형식이 아닙니다.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const data = await uploadImage(formData);
      setImg(`http://api.mandarin.weniv.co.kr/${data.filename}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return { img, onUpload, setImg };
};

export default useImageUpload;
