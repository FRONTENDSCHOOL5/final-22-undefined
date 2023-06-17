import React from 'react';
import * as S from './AlertModal.style';

const AlertModal = ({ message, onClose, buttons, buttonFontColor, buttonBorder }) => {
  return (
    <S.AlertSection>
      <S.Strong>{message}</S.Strong>
      <S.Ul>
        <S.Li>
          {buttons.map((button, index) => (
            <S.Button key={index} onClick={onClose} color={buttonFontColor[index]} style={buttonBorder[index]}>
              {button}
            </S.Button>
          ))}
        </S.Li>
      </S.Ul>
    </S.AlertSection>
  );
};

export default AlertModal;
