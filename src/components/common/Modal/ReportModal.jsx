import React from 'react';
import * as S from './ReportModal.style';

const ReportModal = ({ message, onClose, button, buttonFontColor }) => {
  return (
    <S.AlertSection>
      <S.Strong>{message}</S.Strong>
      <S.Button onClick={() => onClose(button)} color={buttonFontColor}>
        {button}
      </S.Button>
    </S.AlertSection>
  );
};

export default ReportModal;
