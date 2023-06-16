import styled, { keyframes } from 'styled-components';
import Wrapper from './../Wrapper/Wrapper';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  width: 388px;
  height: 80vh;
  margin: 40px auto;
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  animation: ${fadeIn} 0.3s ease-in;
`;

export const Ul = styled.ul`
  position: fixed;
  bottom: 0;
  /* left: 0; */
  transform: translate(0, -100%);
  width: 100%;
  max-width: 390px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: 10px 10px 0 0;
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

export const Li = styled.li`
  padding: 10px 0px 10px 26px;
`;
