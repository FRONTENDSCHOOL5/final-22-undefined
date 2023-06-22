import React, { useContext, useEffect } from 'react';
import * as S from './FormInput.style';
import { AuthContextStore } from '../../../context/AuthContext';

const ERROR_MSG = {
  required: '필수 입력사항을 입력해주세요.',
  itemNamePattern: '잘못된 네이밍 형식입니다.',
  pricePattern: '숫자가 아닌 형식이 포함되었습니다.',
  urlPattern: '잘못된 URL 형식입니다.',
  length: '2자~15자 이내여야 합니다.',
};

const ITEMNAME_REGEX = /^[가-힣a-z0-9]{2,15}+$/i;
const PRICE_REGEX = (/\B(?=(\d{3})+(?!\d))/g, ',');
const URL_REGEX = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;

const ProductFormInput = ({ id, label, formData, setFormData, error, setError, inputProps }) => {
  // 현재 로그인한 유저의 accountname을 가져오기 위함
  const { userAccountname } = useContext(AuthContextStore);

  // 클라이언트 단 유효성 검사
  const validateValue = (value) => {
    let result;

    if (value.length === 0) result = 'required';
    else {
      switch (id) {
        case 'email':
          result = EMAIL_REGEX.test(value) ? 'loading' : 'emailPattern';
          break;
        case 'password':
          result = PASSWORD_REGEX.test(value) ? 'noError' : 'pwPattern';
          break;
        case 'username':
          result = value.length >= 2 && value.length <= 10 ? 'noError' : 'length';
          break;
        case 'accountname':
          if (value === JSON.parse(userAccountname)) result = 'noError';
          else result = ID_REGEX.test(value) ? 'loading' : 'idPattern';
          break;
        default:
          result = 'noError';
          return;
      }
    }
    if (result === 'noError' || result === 'loading') {
      setError({ ...error, [id]: result });
    } else {
      setError({ ...error, [id]: ERROR_MSG[result] });
    }
  };

  // 이메일, 계정 ID 중복 검사
  const checkDuplication = async (errorMsg) => {
    try {
      const url = `https://api.mandarin.weniv.co.kr/user/${id}valid`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: { [id]: formData[id] },
        }),
      });

      const data = await response.json();
      if (data.message === errorMsg) {
        setError({ ...error, [id]: data.message });
      } else if (data.message === '잘못된 접근입니다.') {
        throw Error(data.message);
      } else {
        setError({ ...error, [id]: 'noError' });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // 실시간 이메일, 계정 ID 중복 검사 실행
  useEffect(() => {
    if (!['email', 'accountname'].includes(id)) return;

    // 이 부분 개선 필요...
    if (
      (id === 'email' && !EMAIL_REGEX.test(formData.email)) ||
      (id === 'accountname' && !ID_REGEX.test(formData.accountname)) ||
      formData['accountname'] === JSON.parse(userAccountname)
      // 프로필 수정 페이지에서 현재 로그인한 유저의 accountname인 경우 이미 가입된 계정이라는 에러 메세지를 보여주지 않기 위함
    ) {
      return;
    }

    const errorMsg = id === 'email' ? '이미 가입된 이메일 주소 입니다.' : '이미 가입된 계정ID 입니다.';

    const timer = setTimeout(() => {
      checkDuplication(errorMsg);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [formData.email, formData.accountname]);

  const handleChange = (event) => {
    const { value } = event.target;
    id !== 'intro' && validateValue(value);
    setFormData({ ...formData, [id]: value });
  };

  // 에러 메세지 보여지는 것 여부
  let isInvalid = false;
  if (error[id] !== 'loading' && error[id] !== 'noError' && error[id] !== '') {
    isInvalid = true;
  }

  return (
    <S.Container>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.StyledInput id={id} {...inputProps} value={formData[id]} isInvalid={isInvalid} onChange={handleChange} />
      {isInvalid && <S.ErrorMessage>{`*${error[id]}`}</S.ErrorMessage>}
    </S.Container>
  );
};

export default ProductFormInput;
