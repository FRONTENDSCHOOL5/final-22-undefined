import React, { useState } from 'react';
import styled from 'styled-components';
import uploadIcon from '../../assets/icon/icon-upload.png';
import Ellipse from '../../assets/Ellipse-1.png';

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];
const Post = () => {
  const [imgName, setImgName] = useState('');
  const [imageList, setImageList] = useState([]);

  const handleImgInput = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    console.log(file.name.split('.'));
    const fileExtenstion = file.name.split('.').slice(-1)[0].toLowerCase();
    console.log(fileExtenstion);
    if (!ALLOWED_EXTENSIONS.includes(`.${fileExtenstion}`)) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('https://api.mandarin.weniv.co.kr/image/uploadfile', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setImgName([...imgName, data.filename]);
      console.log(data.filename);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <PostMain>
        <h2 className='a11y-hidden'>게시글 작성</h2>
        <UserProfile src={Ellipse} />
        <PostArticle>
          <h3 className='a11y-hidden'>게시글 작성 form</h3>
          <Form>
            <Textarea name='text' placeholder='게시글 입력하기..'></Textarea>
            <UploadImgBtn htmlFor='imgUpload'></UploadImgBtn>
            <input className='a11y-hidden' type='file' id='imgUpload' onChange={handleImgInput} accept='image/*' />
          </Form>
          <section>
            <h4 className='a11y-hidden'>추가 이미지</h4>
            <ul>
              {imgName && (
                <Li>
                  <UploadImg
                    src={imgName === '' ? Ellipse : `https://api.mandarin.weniv.co.kr/${imgName}`}
                    alt='게시글 업로드 이미지'
                  />
                </Li>
              )}
            </ul>
          </section>
        </PostArticle>
      </PostMain>
    </>
  );
};

export default Post;

const PostMain = styled.main`
  display: flex;
  padding: 20px 16px;
`;

const UserProfile = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  object-fit: cover;
  border-radius: 50%;
`;

const PostArticle = styled.article`
  flex-grow: 1;
`;
const Form = styled.form`
  padding-top: 10px;
`;
const Textarea = styled.textarea`
  width: 100%;
  /* height: 18px; */
  padding: 0;
  margin-bottom: 16px;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Li = styled.li`
  border-radius: 10px;
  width: 304px;
  height: 228px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  position: relative;
  overflow: hidden;
`;

const UploadImg = styled.img`
  /* object-fit: cover; */
`;

const UploadImgBtn = styled.label`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => `${theme.colors.primary} url(${uploadIcon}) no-repeat center`};
`;
