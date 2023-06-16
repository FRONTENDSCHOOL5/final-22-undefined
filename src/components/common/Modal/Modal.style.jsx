import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 390px;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
  animation: ${slideInAnimation} 0.5s cubic-bezier(0.42, 0, 0.21, 1.44), ${fadeInAnimation} 0.3s ease-out;
`;

export const MenuLayout = styled.div`
  position: absolute;
  width: 390px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 36px 0 16px;
  border-radius: 10px 10px 0px 0px;
`;

export const Ul = styled.ul`
  height: auto;
  padding: 36px 0 16px;

  ::before {
    position: absolute;
    content: '';
    top: 16px;
    left: 50%;
    width: 50px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 5px;
    transform: translateX(-50%);
  }
`;
export const Li = styled.ll``;
