import React from 'react';
import ProductBasic from '../../assets/ProductBasic.png';
import * as S from './ProductImgInput.style';

const ProductImgInput = ({ img, onUpload, label }) => {
  const handleChange = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    onUpload(file);
  };

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
