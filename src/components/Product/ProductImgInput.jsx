import React from 'react';
import ProductBasic from '../../assets/ProductBasic.png';
import * as S from './ProductImgInput.style';
import { uploadImage } from '../../api/image';

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];

const ProductImgInput = ({ img, setImg, label }) => {
  const handleChange = async (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    console.log(file);
    const fileExtenstion = file.name.split('.').slice(-1)[0].toLowerCase();

    if (!ALLOWED_EXTENSIONS.includes(`.${fileExtenstion}`)) return;

    const formData = new FormData();
    formData.append('image', event.target.files[0]);

    try {
      const data = await uploadImage(formData);
      setImg(`http://api.mandarin.weniv.co.kr/${data.filename}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const handleChange = (event) => {
  //   if (!event.target.files || event.target.files.length === 0) {
  //     return;
  //   }

  //   const file = event.target.files[0];
  //   onUpload(file);
  // };

  return (
    <>
      <S.Label htmlFor='productImg'>
        {label}
        <S.ProductImg src={img === '' ? ProductBasic : img} alt='상품 이미지' />
      </S.Label>
      <S.UploadInput id='productImg' type='file' className='a11y-hidden' onChange={handleChange} accept='image/*' />
    </>
  );
};

export default ProductImgInput;
