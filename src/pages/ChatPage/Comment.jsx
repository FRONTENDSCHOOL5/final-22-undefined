import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import imgBtn from '../../assets/img-button.png';
import uploadImgBtn from '../../assets/upload-file.png';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import { AuthContextStore } from '../../context/AuthContext';

const Comment = ({ setCommentList, atChatroom, userProfileImg, postId, setCommentCnt }) => {
  const [text, setText] = useState('');
  const { userToken } = useContext(AuthContextStore);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      // 댓글 서버에 보내기, data는 업로드한 comment에 대한 정보
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
      setCommentCnt((prev) => prev + 1);
      setCommentList((prev) => [data.comment, ...prev]);
      setText('');
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
        <UploadForm>
          <label htmlFor='imgUpload'></label>
          <input className='a11y-hidden' type='file' id='imgUpload' accept='image/*' onChange={handleImgUpload} />
        </UploadForm>
      ) : (
        <PostUserProfileImg size={'36px'} userProfileImg={userProfileImg} />
      )}
      <SendForm onSubmit={addComment}>
        <Input
          type='text'
          value={text}
          placeholder={atChatroom ? '메시지 입력하기...' : '댓글 입력하기...'}
          onChange={handleOnChange}
        />
        <PostBtn isActivated={isActivated} type='submit'>
          {atChatroom ? '전송' : '게시'}
        </PostBtn>
      </SendForm>
    </Footer>
  );
};

export default Comment;

const Footer = styled.footer`
  /* max-width: 390px; */
  padding: 13px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: ${({ theme, isActivated }) => (isActivated ? theme.colors.primary : theme.colors.gray)};
`;

const UploadForm = styled.form`
  label {
    display: inline-block;
    background: url(${imgBtn}) no-repeat center / 36px 36px;
    width: 36px;
    height: 36px;
    margin-right: 18px;
    cursor: pointer;
  }
  label:hover {
    transition: 0.3s;
    background: url(${uploadImgBtn}) no-repeat center / 36px 36px;
    width: 36px;
    height: 36px;
  }
`;

const SendForm = styled.form`
  display: flex;
  flex-grow: 1;
`;
