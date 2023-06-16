import React, { useEffect, useRef } from 'react';
import * as S from './Modal.style';

const PostModal = ({ options, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const ClickOutSide = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', ClickOutSide);

    return () => {
      document.removeEventListener('mousedown', ClickOutSide);
    };
  }, [onClose]);

  return (
    <S.Container>
      <S.MenuLayout ref={modalRef}>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <button>{option}</button>
            </li>
          ))}
        </ul>
      </S.MenuLayout>
    </S.Container>
  );
};

export default PostModal;
