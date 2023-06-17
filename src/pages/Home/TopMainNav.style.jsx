import styled from 'styled-components';
import iconSearch from '../../assets/icon/icon-search.png';

export const Header = styled.header`
  margin-bottom: 220px;
  border-bottom: 0.5px solid #dbdbdb;
  padding: 13px 16px;
`;

export const H1 = styled.h1`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
`;

export const SearchBtn = styled.button`
  background: url(${iconSearch}) no-repeat center/ 16px 16px;
  width: 16px;
  height: 16px;
  float: right;
`;
