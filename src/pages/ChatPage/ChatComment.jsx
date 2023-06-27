<<<<<<< HEAD
import React, { useContext, useState, forwardRef } from 'react';
=======
import React, { useContext, useState } from 'react';
>>>>>>> 92424a5 (move: style 파일 전체 분리)
import * as S from './ChatComment.style';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import { AuthContextStore } from '../../context/AuthContext';
import { addComment } from '../../api/comment';
<<<<<<< HEAD
import { useLocation } from 'react-router-dom';

const ChatComment = forwardRef(({ setCommentList, atChatroom, userProfileImg, postId, setCommentCnt }, ref) => {
  const [text, setText] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const location = useLocation();

  const submitComment = async (e) => {
    e.preventDefault();
    if (location.pathname === '/chat/room') return setText('');
    try {
      const data = await addComment(postId, text, userToken);
=======

const ChatComment = ({ setCommentList, atChatroom, userProfileImg, postId, setCommentCnt }) => {
  const [text, setText] = useState('');
  const { userToken } = useContext(AuthContextStore);

  const submitComment = async (e) => {
    e.preventDefault();
    try {
      const data = await addComment(postId, text, userToken);
      // console.log(data);
>>>>>>> 92424a5 (move: style 파일 전체 분리)
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
    <S.Footer>
      {atChatroom ? (
        <S.UploadForm>
          <label htmlFor='imgUpload'></label>
          <input className='a11y-hidden' type='file' id='imgUpload' accept='image/*' onChange={handleImgUpload} />
        </S.UploadForm>
      ) : (
        <PostUserProfileImg size={'36px'} userProfileImg={userProfileImg} />
      )}
      <S.SendForm onSubmit={submitComment}>
        <S.Input
          type='text'
          value={text}
          placeholder={atChatroom ? '메시지 입력하기...' : '댓글 입력하기...'}
          onChange={handleOnChange}
<<<<<<< HEAD
          ref={ref}
=======
>>>>>>> 92424a5 (move: style 파일 전체 분리)
        />
        <S.PostBtn isActivated={isActivated} type='submit'>
          {atChatroom ? '전송' : '게시'}
        </S.PostBtn>
      </S.SendForm>
    </S.Footer>
  );
<<<<<<< HEAD
});
=======
};
>>>>>>> 92424a5 (move: style 파일 전체 분리)

export default ChatComment;
