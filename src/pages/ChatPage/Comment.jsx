import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import imgBtn from '../../assets/img-button.png';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import { AuthContextStore } from '../../context/AuthContext';

const Comment = ({ atChatroom, userProfileImg, postId }) => {
  const [text, setText] = useState('');
  const { userToken } = useContext(AuthContextStore);
  console.log(userToken);

  const addComment = async () => {
    try {
      const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          comment: {
            content: text,
          },
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  let isActivated = false;
  if (text) isActivated = true;
  return (
    <Footer>
      <PostUserProfileImg size={'36px'} userProfileImg={userProfileImg} />
      <Input
        type='text'
        placeholder={atChatroom ? '메시지 입력하기...' : '댓글 입력하기...'}
        onChange={handleOnChange}
      />
      <PostBtn isActivated={isActivated} type='submit' onClick={addComment}>
        {atChatroom ? '전송' : '게시'}
      </PostBtn>
    </Footer>
  );
};

export default Comment;

const Footer = styled.footer`
  /* max-width: 390px; */
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  position: fixed;
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
  font-weight: 700;
  line-height: 18px;
  text-align: right;
  color: ${({ theme, isActivated }) => (isActivated ? theme.colors.primary : theme.colors.gray)};
`;
