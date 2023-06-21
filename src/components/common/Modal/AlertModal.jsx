import React, { useState, useEffect } from 'react';
import * as S from './AlertModal.style';

const AlertModal = ({ message, onClose, buttons, buttonFontColor, buttonBorder }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.AlertSection scrollPosition={scrollPosition}>
      <S.Strong>{message}</S.Strong>
      <S.Ul>
        {buttons.map((button, index) => {
          return (
            <S.Li key={index}>
              <S.Button onClick={() => onClose(button)} color={buttonFontColor[index]} style={buttonBorder[index]}>
                {button}
              </S.Button>
            </S.Li>
          );
        })}
      </S.Ul>
    </S.AlertSection>
  );
};

export default AlertModal;
