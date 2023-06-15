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
      <Main>
        <h2 className='a11y-hidden'>게시글 작성</h2>
        <UserProfile src={Ellipse} />
        <PostArticle>
          <h3 className='a11y-hidden'>게시글 작성 form</h3>
          <form>
            <Textarea name='text' id='' cols='30' rows='10'></Textarea>

            <ImgUpload htmlFor='imgUpload'></ImgUpload>
            <input className='a11y-hidden' type='file' id='imgUpload' onChange={handleImgInput} accept='image/*' />
          </form>
        </PostArticle>
        <section>
          <h4 className='a11y-hidden'>추가 이미지</h4>
          <ul>
            {imgName && (
              <img
                style={{ width: '20%' }}
                src={imgName === '' ? Ellipse : `https://api.mandarin.weniv.co.kr/${imgName}`}
                alt='게시글 업로드 이미지'
              />
            )}
          </ul>
        </section>
      </Main>
    </>
  );
};

export default Post;

const Main = styled.main`
  padding: 20px 16px;
`;

const UserProfile = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  border-radius: 50%;
`;

const ImgUpload = styled.label`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => `${theme.colors.primary} url(${uploadIcon}) no-repeat center`};
`;

const Textarea = styled.textarea`
  display: inline;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const PostArticle = styled.article`
  width: 100%;
  display: inline-block;
`;
