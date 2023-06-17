import styled from 'styled-components';
import ArrowLeftIcon from '../../../assets/icon/icon-arrow-left.png';
import Button from '../Button/Button';

export const Header = styled.header`
  padding: 0 16px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackBtn = styled.button`
  width: 22px;
  height: 22px;
  background: url(${ArrowLeftIcon}) no-repeat center;
`;

export const StyledButton = styled(Button)`
  width: 90px;
`;
