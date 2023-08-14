import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from './PostUpload.style';
import { AuthContextStore } from '../../context/AuthContext';
import SaveHeader from '../../components/common/Header/SaveHeader';
import { useNavigate } from 'react-router-dom';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import { uploadPost } from '../../api/post';
import { getMyInfo } from '../../api/profile';
import useImagesUpload from '../../hooks/useImagesUpload';
import { Helmet } from 'react-helmet';

const PostUpload = () => {
  const [userContent, setUserContent] = useState('');
  const { images, onUpload, onDelete } = useImagesUpload();
  const [userProfileImg, setUserProfileImg] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const textarea = useRef(); // textarea 높이 자동 조절을 위해 쓰이는 ref
  const navigate = useNavigate();

  // 유저 프로필 이미지 요청
  useEffect(() => {
    const handleUserImg = async () => {
      try {
        const data = await getMyInfo(userToken);
        setUserProfileImg(data.user.image);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleUserImg();
  }, []);

  const handleUpload = async () => {
    try {
      // 게시물 업로드
      console.log('hi');
      let image;
      if (images.length === 0) image = '';
      else {
        image = images.map((image) => `https://api.mandarin.weniv.co.kr/${image}`).join(',');
      }
      await uploadPost(userToken, userContent, image);
      navigate('/profile');
    } catch (error) {
      console.log(error.message);
    }
  };

  // 이미지 업로드
  const handleImgInput = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    onUpload(e.target.files, e.target.files.length);
  };

  // textarea 높이 자동 조절
  const handleContent = (e) => {
    setUserContent(e.target.value);
    textarea.current.style.height = 'auto'; // 높이 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  // 버튼 활성화 여부
  let isActivated = false;
  if (userContent || images.length > 0) isActivated = true;

  return (
    <>
      <Helmet>
        <title>글 작성</title>
      </Helmet>
      <SaveHeader name='업로드' mode={isActivated ? 'default' : 'disabled'} onClick={handleUpload} />
      <S.Title className='a11y-hidden'>게시글 작성 페이지</S.Title>
      <S.PostMain>
        <PostUserProfileImg userProfileImg={userProfileImg} />
        <S.PostArticle>
          <S.Form>
            <S.Textarea
              value={userContent}
              name='text'
              placeholder='게시글 입력하기..'
              onChange={handleContent}
              ref={textarea}
              rows={1}
            />
          </S.Form>
          <S.Section>
            <S.Ul>
              {images.map((image, index) => (
                <S.Li key={index}>
                  <S.UploadImg src={`https://api.mandarin.weniv.co.kr/${image}`} alt='게시글 업로드 이미지' />
                  <S.DeleteBtn onClick={() => onDelete(index)}>
                    <span className='a11y-hidden'>업로드 이미지 삭제</span>
                  </S.DeleteBtn>
                </S.Li>
              ))}
            </S.Ul>
            <S.UploadImgBtn htmlFor='imgUpload' />
            <S.UploadImgInp
              className='a11y-hidden'
              type='file'
              id='imgUpload'
              onChange={handleImgInput}
              accept='image/*'
              multiple={true}
            />
          </S.Section>
        </S.PostArticle>
      </S.PostMain>
    </>
  );
};

export default PostUpload;
