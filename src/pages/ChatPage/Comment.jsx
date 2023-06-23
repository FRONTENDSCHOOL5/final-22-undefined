import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import imgBtn from '../../assets/img-button.png';
import uploadImgBtn from '../../assets/upload-file.png';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import { AuthContextStore } from '../../context/AuthContext';

const Comment = ({ atChatroom, userProfileImg, postId }) => {
  const [text, setText] = useState('');
  const { userToken } = useContext(AuthContextStore);

  const addComment = async () => {
    try {
      // 댓글 서버에 보내기
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

      //클릭시
      // const res = await fetch(`https://api.mandarin.weniv.co.kr/post/${postId}`, {
      //   headers: {
      //     Authorization: `Bearer ${userToken}`,
      //     'Content-Type': 'application/json',
      //   },
      // });
      // const result = await res.json();
      // console.log(result.post.commentCount);
      // setCommentCount(result.post.commentCount);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  let isActivated = false;
  if (text) isActivated = true;

  return (
    <Footer>
      {atChatroom ? (
        <Form>
          <label htmlFor='imgUpload'></label>
          <input className='a11y-hidden' type='file' id='imgUpload' accept='image/*' onChange={handleImgUpload} />
        </Form>
      ) : (
        <PostUserProfileImg size={'36px'} userProfileImg={userProfileImg} />
      )}
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
  font-weight: 700;
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
