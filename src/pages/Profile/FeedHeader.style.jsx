import styled from 'styled-components';

export const Header = styled.div`
  /* position: relative;
  top: 0;
  left: 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: ${({ theme }) => `1px solid ${theme.colors.white}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

export const ButtonIcon = styled.button`
  width: 22px;
  height: 22px;
  margin: 0 12px;
`;
