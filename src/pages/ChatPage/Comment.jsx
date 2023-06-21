import React, { useState } from 'react';
import styled from 'styled-components';

import imgBtn from '../../assets/img-button.png';

const Footer = styled.footer`
  max-width: 390px;
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-top: 0.5px solid #dbdbdb;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Input = styled.input`
  flex-grow: 1;
  margin-right: 12px;
  outline: none;
  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const PostBtn = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: right;
  color: ${({ theme, isActivated }) => (isActivated ? theme.colors.primary : theme.colors.gray)};
`;

const Comment = () => {
  const [word, setWord] = useState('');

  const handleOnChange = (e) => {
    let txt = e.target.value;
    setWord(txt);
  };

  let isActivated = false;
  if (word) isActivated = true;

  return (
    <Footer>
      <Input type='text' placeholder='댓글 입력하기...' onChange={handleOnChange} />
      <PostBtn isActivated={isActivated} type='submit'>
        전송
      </PostBtn>
    </Footer>
  );
};

export default Comment;
