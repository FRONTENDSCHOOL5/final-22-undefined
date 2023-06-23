import React from 'react';
import * as S from './FormInput.style';

const ERROR_MSG = {
  required: '필수 입력사항을 입력해주세요.',
  itemNamePattern: '잘못된 네이밍 형식입니다.',
  pricePattern: '너무 높은 가격! 백만원 이하로 써주세요.',
  urlPattern: '잘못된 URL 형식입니다.',
};

const ITEMNAME_REGEX = /^[가-힣a-z0-9]{2,15}$/i;
const PRICE_REGEX = /^(?:[1-9][0-9]{0,5}|1000000)$/; // 1,000,000원 이하의 값만 허용
const URL_REGEX = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/;

const ProductFormInput = ({ id, label, formData, setFormData, error, setError, inputProps }) => {
  // 유효성 검사
  const validateValue = (value) => {
    let result;

    if (value.length === 0) result = 'required';
    else {
      switch (id) {
        case 'itemName':
          result = ITEMNAME_REGEX.test(value) ? 'noError' : 'itemNamePattern';
          break;
        case 'price':
          const numericValue = value.replace(/[^0-9]/g, '');
          result = PRICE_REGEX.test(numericValue) ? 'noError' : 'pricePattern';
          break;
        case 'link':
          result = URL_REGEX.test(value) ? 'noError' : 'urlPattern';
          break;
        default:
          result = 'noError';
          break;
      }
    }
    setError((prevError) => ({
      ...prevError,
      [id]: result === 'noError' ? '' : ERROR_MSG[result],
    }));
  };

  const handleChange = (event) => {
    const { value } = event.target;

    let updatedValue = value;
    if (id === 'price') {
      const numericValue = value.replace(/[^0-9]/g, ''); // 숫자가 아닌 문자 제거
      const formattedPrice = numericValue ? `${parseFloat(numericValue).toLocaleString('ko-KR')}원` : ''; // 원단위로 변환
      updatedValue = formattedPrice;
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: updatedValue,
    }));

    validateValue(updatedValue);
  };

  const handleKeyDown = (event) => {
    if (id === 'price' && event.key === 'Backspace') {
      event.preventDefault();
      const { value } = event.target;
      const numericValue = value.replace(/[^0-9]/g, '');
      const updatedValue = numericValue.substring(0, numericValue.length - 1);
      const formattedPrice = updatedValue ? `${parseInt(updatedValue).toLocaleString('ko-KR')}원` : '';
      setFormData((data) => ({
        ...data,
        [id]: formattedPrice,
      }));
      validateValue(formattedPrice);
    }
  };

  let isInvalid = false;
  if (error[id] !== 'noError' && error[id] !== '') {
    isInvalid = true;
  }

  return (
    <S.Container>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.StyledInput
        id={id}
        {...inputProps}
        value={formData[id]}
        isInvalid={isInvalid}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {isInvalid && <S.ErrorMessage>{`*${error[id]}`}</S.ErrorMessage>}
    </S.Container>
  );
};

export default ProductFormInput;
