import styled from 'styled-components';
import iconSearch from '../../../assets/icon/icon-search.svg';
import { Link } from 'react-router-dom';
export const Header = styled.header`
  height: 48px;
  padding: 13px 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  background-color: ${({ theme }) => theme.colors.white};

  h1 {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }
  img {
    height: 22px;
  }
`;
export const SearchLink = styled(Link)`
  background: url(${iconSearch}) no-repeat center/ 20px 20px;
  width: 20px;
  height: 20px;
`;
