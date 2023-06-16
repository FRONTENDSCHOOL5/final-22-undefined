import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

export const ButtonIcon = styled.button`
  width: 22px;
  height: 22px;
  margin: 0 12px;
`;

export const BgDark = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;
