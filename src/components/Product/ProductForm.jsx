import React from 'react';
import ProductImgInput from '../Product/ProductImgInput';
import ProductFormInput from '../common/Input/ProductFormInput';

const ProductForm = ({ formData, setFormData, img, setImg, error, setError }) => {
  return (
    <>
      <ProductImgInput id='itemImg' label='이미지 등록' img={img} setImg={setImg} />
      <ProductFormInput
        id='itemName'
        label='이름'
        formData={formData}
        setFormData={setFormData}
        error={error}
        setError={setError}
        inputProps={{
          type: 'text',
          placeholder: '2~15자 이내여야 합니다.',
        }}
      />
      <ProductFormInput
        id='price'
        label='가격'
        formData={formData}
        setFormData={setFormData}
        error={error}
        setError={setError}
        inputProps={{
          type: 'text',
          placeholder: '숫자만 입력 가능합니다.',
          value: formData.price,
        }}
      />
      <ProductFormInput
        id='link'
        label='보호소 링크'
        formData={formData}
        setFormData={setFormData}
        error={error}
        setError={setError}
        inputProps={{
          type: 'text',
          placeholder: 'URL을 입력해 주세요.',
        }}
      />
    </>
  );
};

export default ProductForm;
