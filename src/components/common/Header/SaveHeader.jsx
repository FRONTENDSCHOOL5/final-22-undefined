import React from 'react';
import * as S from './SaveHeader.style';

const SaveHeader = ({ name, mode, ...props }) => {
  return (
    <S.Header>
      <S.BackBtn>
        <span className='a11y-hidden'>뒤로 가기 버튼</span>
      </S.BackBtn>
      <S.StyledButton mode='default' size='ms' {...props}>
        {name}
      </S.StyledButton>
    </S.Header>
  );
};

export default SaveHeader;
