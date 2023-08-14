import styled from 'styled-components';
import MainLayout from '../../components/common/MainLayout/MainLayout';
import homeLogo from '../../assets/homeLogo.svg';
import Button from '../../components/common/Button/Button';

export const Main = styled(MainLayout)`
  h1 {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

export const NoFollower = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 82vh;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 20px;
    &::before {
      content: '';
      display: block;
      background: url(${homeLogo}) no-repeat center/ contain;
      width: 130px;
      height: 130px;
      margin: 0 auto 25px;
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 120px;
`;

export const TopButton = styled.button`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 999;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
