import React, { useState } from 'react';
import styled from 'styled-components';

import imgBtn from '../../assets/img-button.png';
import uploadImgBtn from '../../assets/upload-file.png';

const Footer = styled.footer`
  padding: 13px 16px;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
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

const Form = styled.form`
  label {
    display: inline-block;
    background: url(${imgBtn}) no-repeat center / 36px 36px;
    width: 36px;
    height: 36px;
    margin-right: 18px;
    cursor: pointer;
  }
  label:hover {
    background: url(${uploadImgBtn}) no-repeat center / 36px 36px;
    width: 36px;
    height: 36px;
  }
`;

const Comment = () => {
  const [word, setWord] = useState('');

  const handleOnChange = (e) => {
    let txt = e.target.value;
    setWord(txt);
  };

  let isActivated = false;
  if (word) isActivated = true;

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  return (
    <Footer>
      <Form>
        <label htmlFor='imgUpload'></label>
        <input className='a11y-hidden' type='file' id='imgUpload' accept='image/*' onChange={handleImgUpload} />
      </Form>
      <Input type='text' placeholder='댓글 입력하기...' onChange={handleOnChange} />
      <PostBtn isActivated={isActivated} type='submit'>
        전송
      </PostBtn>
    </Footer>
  );
};

export default Comment;
