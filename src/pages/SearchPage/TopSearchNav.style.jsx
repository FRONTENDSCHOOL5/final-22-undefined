import styled, { css } from 'styled-components';

export const Header = styled.header`
  height: 48px;
  margin: 0px auto;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  ${({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.gray};
    background-color: ${colors.white};
  `};
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.fourth};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: 32px;
  padding: 7px 16px;
  margin-left: 20px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 17.53px;
    color: ${({ theme }) => theme.colors.txtColor};
  }
  &:focus,
  &:active {
    outline: none;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
