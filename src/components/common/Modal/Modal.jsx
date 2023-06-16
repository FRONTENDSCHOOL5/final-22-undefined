import React, { useEffect, useRef } from 'react';
import * as S from './Modal.style';

const FeedModal = ({ options, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const clickOutSide = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', clickOutSide);

    return () => {
      document.removeEventListener('mousedown', clickOutSide);
    };
  }, [onClose]);

  return (
    <>
      <S.ModalBg>
        <S.Ul ref={modalRef}>
          {options.map((option, index) => (
            <S.Li key={index}>
              <button>{option}</button>
            </S.Li>
          ))}
        </S.Ul>
      </S.ModalBg>
    </>
  );
};

export default FeedModal;
