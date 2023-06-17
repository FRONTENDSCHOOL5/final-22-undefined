import React from 'react';
import * as S from './SaveHeader.style';
import { useNavigate } from 'react-router-dom';

const SaveHeader = ({ name, mode, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <S.Header>
      <S.BackBtn onClick={handleClick}>
        <span className='a11y-hidden'>뒤로 가기 버튼</span>
      </S.BackBtn>
      <S.StyledButton mode={mode} size='ms' {...props}>
        {name}
      </S.StyledButton>
    </S.Header>
  );
};

export default SaveHeader;
