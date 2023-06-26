import { useState } from 'react';
import { uploadImages } from '../api/image';

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];

const useImagesUpload = () => {
  const [images, setImages] = useState([]);

  const onUpload = async (files, length) => {
    if (images.length + length > 3) return alert('이미지는 최대 3개까지 업로드 할 수 있습니다.');

    const formData = new FormData();
    for (let i = 0; i < length; i++) {
      const file = files[i];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (ALLOWED_EXTENSIONS.includes(`.${fileExtension}`)) {
        formData.append('image', file);
      }
    }

    try {
      const data = await uploadImages(formData);
      const filenames = data.map((data) => data.filename);
      setImages((prev) => [...prev, ...filenames]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onDelete = (index) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });

    alert('삭제되었습니다.');
  };

  return { images, onUpload, onDelete };
};

export default useImagesUpload;
