import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  & + & {
    margin-top: 16px;
  }
`;

const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.txtColor};
  font-size: 12px;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 14px;
  padding-bottom: 8px;
  border: none;
  border-bottom: ${({ theme, isInvalid }) =>
    isInvalid
      ? `1px solid ${theme.colors.warning}`
      : `1px solid ${theme.colors.gray}`};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    outline: none;
    border-bottom: ${({ theme, isInvalid }) =>
      isInvalid
        ? `1px solid ${theme.colors.warning}`
        : `1px solid ${theme.colors.primary}`};
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.warning};
  font-size: 12px;
  font-weight: 500;
`;

const FormInput = ({
  id,
  label,
  formData,
  setFormData,
  error,
  setError,
  inputProps,
}) => {
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
          result =
            value.length >= 2 && value.length <= 10 ? 'noError' : 'length';
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

  const handleChange = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  let isInvalid = false;
  if (error[id] !== 'noError' && error[id] !== '') {
    isInvalid = true;
  }

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        {...inputProps}
        value={formData[id]}
        isInvalid={isInvalid}
        onChange={handleChange}
      />
      {isInvalid && <ErrorMessage>{`*${error[id]}`}</ErrorMessage>}
    </Container>
  );
};

export default FormInput;
