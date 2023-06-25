import styled from 'styled-components';
import iconSearch from '../../../assets/icon/icon-search.png';

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

  a {
    background: url(${iconSearch}) no-repeat center/ 16px 16px;
    width: 16px;
    height: 16px;
  }
`;
