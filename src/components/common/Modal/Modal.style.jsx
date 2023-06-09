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
    left: 50%;
    width: 50px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid transparent;
    border-radius: 5px;
    transform: translateX(-50%) rotate(360deg); /* 회전 효과 추가 */
    animation: rotateAnimation 0.7s linear forwards;
  }

  @keyframes rotateAnimation {
    0% {
      transform: translateX(-50%) rotate(0deg);
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.third} 0%,
        ${({ theme }) => theme.colors.third} 100%
      );
    }
    100% {
      transform: translateX(-50%) rotate(360deg);
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.primary} 0%,
        ${({ theme }) => theme.colors.primary} 100%
      );
    }
  }
`;

export const Li = styled.li`
  padding: 10px 0px 10px 26px;
  font-weight: 700;
`;
