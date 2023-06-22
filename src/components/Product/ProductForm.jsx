import React from 'react';
import ImgInput from '../common/Input/ImgInput';
import ProductFormInput from '../common/Input/ProductFormInput';

const ProductForm = ({ formData, setFormData, img, setImg, error, setError }) => {
  return (
    <>
      <ImgInput img={img} setImg={setImg} />
      <ProductFormInput
        id='itemName'
        label='상품명'
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
        }}
      />
      <ProductFormInput
        id='link'
        label='판매 링크'
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
