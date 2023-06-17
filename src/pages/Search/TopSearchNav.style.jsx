import styled from 'styled-components';

import arrowLeft from '../../assets/icon/icon-arrow-left.png';

export const Header = styled.header`
  margin: 0px auto;
  border-bottom: 0.5px solid #dbdbdb;
  padding: 8px 16px;
`;

export const Input = styled.input`
  background-color: #f2f2f2;
  border-radius: 32px;
  padding: 7px 245px 7px 16px;
  margin-left: 20px;
`;

export const Arrow = styled.button`
  background: url(${arrowLeft}) no-repeat center/ 22px 22px;
  width: 22px;
  height: 22px;
  vertical-align: middle;
  float: left;
  cursor: pointer;
`;
