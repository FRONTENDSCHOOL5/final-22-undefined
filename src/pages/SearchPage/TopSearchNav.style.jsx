import styled from 'styled-components';

import arrowLeft from '../../assets/icon/icon-arrow-left.png';

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
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgGray};
  border-radius: 32px;
  padding: 7px 16px;
  margin-left: 20px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 17.53px;
    color: ${({ theme }) => theme.colors.txtColor};
  }
`;

export const Arrow = styled.a`
  background: url(${arrowLeft}) no-repeat center/ 22px 22px;
  width: 22px;
  height: 22px;
  vertical-align: middle;
  float: left;
  cursor: pointer;
`;
