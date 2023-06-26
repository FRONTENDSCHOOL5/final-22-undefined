import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import uploadIcon from '../../assets/icon/icon-upload.png';
import removeIcon from '../../assets/icon/icon-delete.svg';
import { AuthContextStore } from '../../context/AuthContext';
import SaveHeader from '../../components/common/Header/SaveHeader';
import { useNavigate } from 'react-router-dom';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import { uploadPost } from '../../api/post';
import { getMyInfo } from '../../api/profile';
import useImagesUpload from '../../hooks/useImagesUpload';

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
      let image;
      if (images.length === 0) image = '';
      else {
        image = images.map((image) => `https://api.mandarin.weniv.co.kr/${image}`).join(',');
      }
      // console.log(image);
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
      <SaveHeader name='업로드' mode={isActivated ? 'default' : 'disabled'} onClick={handleUpload} />
      <Title className='a11y-hidden'>게시글 작성 페이지</Title>
      <PostMain>
        <PostUserProfileImg userProfileImg={userProfileImg} />
        <PostArticle>
          <Form>
            <Textarea
              value={userContent}
              name='text'
              placeholder='게시글 입력하기..'
              onChange={handleContent}
              ref={textarea}
              rows={1}
            />
          </Form>
          <Section>
            <Ul>
              {images.map((image, index) => (
                <Li key={index}>
                  <UploadImg src={`https://api.mandarin.weniv.co.kr/${image}`} alt='게시글 업로드 이미지' />
                  <DeleteBtn onClick={() => onDelete(index)}>
                    <span className='a11y-hidden'>업로드 이미지 삭제</span>
                  </DeleteBtn>
                </Li>
              ))}
            </Ul>
            <UploadImgBtn htmlFor='imgUpload' />
            <UploadImgInp
              className='a11y-hidden'
              type='file'
              id='imgUpload'
              onChange={handleImgInput}
              accept='image/*'
              multiple={true}
            />
          </Section>
        </PostArticle>
      </PostMain>
    </>
  );
};

export default PostUpload;

const Title = styled.h2``;

const PostMain = styled.main`
  margin-top: 48px;
  padding: 20px 16px;
  display: flex;
`;

const PostArticle = styled.article`
  flex-grow: 1;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Form = styled.form`
  padding-top: 8px;
`;

const Section = styled.section``;

const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 8px;
  border: none;
  resize: none;
  overflow: hidden;
  line-height: 20px;
  word-break: break-all;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: 10px;
  max-width: 800px;
`;

const Li = styled.li`
  border-radius: 10px;
  flex-shrink: 1;
  flex-basis: 302px;
  max-height: 228px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  overflow: hidden;
`;

const UploadImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UploadImgBtn = styled.label`
  position: absolute;
  right: 16px;
  bottom: 25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ theme }) => `${theme.colors.primary} url(${uploadIcon}) no-repeat center`};
`;

const UploadImgInp = styled.input``;

const DeleteBtn = styled.button`
  width: 22px;
  height: 22px;
  top: 6px;
  right: 6px;
  background: url(${removeIcon}) no-repeat center / contain;
  position: absolute;
  cursor: pointer;
`;
