import styled from 'styled-components';

import arrowLeft from '../../assets/icon/icon-arrow-left.png';

export const Header = styled.header`
  margin: 0px auto;
  border-bottom: 0.5px solid #dbdbdb;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 32px;
  padding: 7px 16px;
  margin-left: 20px;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 17.53px;
    color: #c4c4c4;
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
