import React from 'react';
import styled from 'styled-components';

const AlertModal = ({ message, onClose, buttons }) => {
  return (
    <AlertSection>
      <Strong>{message}</Strong>
      <Ul>
        {buttons.map((button, index) => {
          return (
            <Li key={index}>
              <Button
                onClick={() => onClose(button.text)}
                color={button.color}
                style={index === 1 ? { borderLeft: '0.5px solid #dbdbdb' } : {}}
              >
                {button.text}
              </Button>
            </Li>
          );
        })}
      </Ul>
    </AlertSection>
  );
};

export default AlertModal;

export const AlertSection = styled.div`
  position: fixed;
  width: 252px;
  height: 110px;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 999;
  text-align: center;
  overflow: hidden;
`;

export const Strong = styled.strong`
  display: inline-block;
  border: none;
  margin: 22px auto;
  font-size: 16px;
`;

export const Ul = styled.ul`
  border-top: ${({ theme }) => `0.5px solid ${theme.colors.gray}`};
  display: flex;
  justify-content: space-between;
`;

export const Li = styled.li`
  flex: 1;
`;

export const Button = styled.button`
  width: 100%;
  height: 46px;
  font-weight: 700;
  color: ${({ color }) => color || 'inherit'};
`;
