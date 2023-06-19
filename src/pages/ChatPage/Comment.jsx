import React from 'react';
import styled from 'styled-components';

import PostUserProfileImg from '../../components/Post/PostUserProfileImg';

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
  color: ${({ theme }) => theme.colors.gray};
`;

const Comment = () => {
  return (
    <Footer>
      <PostUserProfileImg size={'36px'} />
      <Input type='text' placeholder='댓글 입력하기...' />
      <PostBtn type='submit'>게시</PostBtn>
    </Footer>
  );
};

export default Comment;
