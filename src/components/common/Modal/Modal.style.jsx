import styled, { keyframes } from 'styled-components';
import Wrapper from './../Wrapper/Wrapper';

const fadeIn = keyframes`
  from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 3;
        transform: none;
    }
`;

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  width: 389px;
  height: 80vh;
  margin: 40px auto;
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

export const Ul = styled.ul`
  position: sticky; // fixed는 viewport에 고정이고 sticky는 내가 정한 offset에 닿을 때부터 고정 (부모 내에 유지)
  top: 100%;
  width: 100%;
  max-width: 390px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: 10px 10px 0 0;
  padding: 36px 0 16px;
  animation: ${fadeIn} 0.5s ease-in-out;

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
