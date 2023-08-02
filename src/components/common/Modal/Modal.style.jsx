import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  from {
        opacity: 0;
        transform: translateY(100%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  overflow: hidden;
`;

export const Ul = styled.ul`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: 10px 10px 0 0;
  padding: 36px 0 16px;
  animation: ${slide} 0.3s ease-in-out;

  ::before {
    position: absolute;
    content: '';
    top: 16px;
    left: 47%;
    width: 50px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 5px;
  }
`;

export const Li = styled.li`
  padding: 10px 0px 10px 26px;
  font-weight: 700;
`;
