import React from 'react';
import * as S from './FormInput.style';

const LoginFormInput = ({ id, label, formData, setFormData, error, setError, inputProps }) => {
  const validateValue = (value) => {
    if (error[id] === '이메일 또는 비밀번호가 일치하지 않습니다.') {
      setError({ email: 'noError', password: 'noError' });
    } else {
      const result = value.length === 0 ? '필수 입력사항을 입력해주세요.' : 'noError';
      setError({ ...error, [id]: result });
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;

    // validate(value);
    validateValue(value);
    setFormData({ ...formData, [id]: value });
  };

  let isInvalid = false;
  if (error[id] !== 'noError' && error[id] !== '') {
    isInvalid = true;
  }

  if (id === 'email' && error.email === '이메일 또는 비밀번호가 일치하지 않습니다.') isInvalid = false;

  return (
    <S.Container>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.StyledInput id={id} {...inputProps} value={formData[id]} isInvalid={isInvalid} onChange={handleChange} />
      {isInvalid && <S.ErrorMessage>{`*${error[id]}`}</S.ErrorMessage>}
    </S.Container>
  );
};

export default LoginFormInput;
