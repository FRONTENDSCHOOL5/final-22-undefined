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
  const handleChange = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        {...inputProps}
        value={formData[id]}
        onChange={handleChange}
      />
      <ErrorMessage>{`*${error[id]}`}</ErrorMessage>
    </Container>
  );
};

export default FormInput;
