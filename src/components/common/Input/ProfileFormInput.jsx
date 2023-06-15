import React, { useEffect } from 'react';
import * as S from './FormInput.style';

const ERROR_MSG = {
  required: '필수 입력사항을 입력해주세요.',
  emailPattern: '잘못된 이메일 형식입니다.',
  pwPattern: '대/소문자, 숫자 6자 이상이어야 합니다.',
  length: '2자~10자 이내여야 합니다.',
  idPattern: '2~16자 이내의 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.',
};

const EMAIL_REGEX = /^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const PASSWORD_REGEX = /^[A-Za-z0-9]{6,}$/;
const ID_REGEX = /^[a-z0-9A-Z_.]{2,16}$/;

const ProfileFormInput = ({ id, label, formData, setFormData, error, setError, inputProps }) => {
  const validateValue = (value) => {
    let result;

    if (value.length === 0) result = 'required';
    else {
      switch (id) {
        case 'email':
          result = EMAIL_REGEX.test(value) ? 'noError' : 'emailPattern';
          break;
        case 'password':
          result = PASSWORD_REGEX.test(value) ? 'noError' : 'pwPattern';
          break;
        case 'username':
          result = value.length >= 2 && value.length <= 10 ? 'noError' : 'length';
          break;
        case 'accountname':
          result = ID_REGEX.test(value) ? 'noError' : 'idPattern';
          break;
        default:
          return;
      }
    }
    if (result === 'noError') {
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

  useEffect(() => {
    if (!['email', 'accountname'].includes(id)) return;

    // 이 부분 개선 필요...
    if (
      (id === 'email' && !EMAIL_REGEX.test(formData.email)) ||
      (id === 'accountname' && !ID_REGEX.test(formData.accountname))
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

  let isInvalid = false;
  if (error[id] !== 'noError' && error[id] !== '') {
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

export default ProfileFormInput;
