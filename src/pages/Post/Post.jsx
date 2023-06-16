import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import uploadIcon from '../../assets/icon/icon-upload.png';
import removeIcon from '../../assets/icon/icon-delete.svg';
import Ellipse from '../../assets/Ellipse-1.png';
import { AuthContextStore } from '../../context/AuthContext';

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];
const Post = () => {
  const [uploadImg, setUploadImg] = useState('');
  const [userImg, setUserImg] = useState('');
  const { userToken } = useContext(AuthContextStore);

  useEffect(() => {
    const handleUserImg = async () => {
      try {
        const res = await fetch('https://api.mandarin.weniv.co.kr/user/myinfo', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`,
          },
        });
        const data = await res.json();
        console.log(data);
        console.log(data.user.image);
        setUserImg(data.user.image);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleUserImg();
  }, []);

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
      console.log(data);
      setUploadImg(data.filename);
    } catch (error) {
      console.log(error.message);
    }
  };

  const cofirmDelete = (message = '', onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== 'function') {
      return;
    }
    if (onCancel && typeof onCancel !== 'function') {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };

    return confirmAction;
  };

  const deleteConfirm = () => {
    setUploadImg('');
    alert('삭제했습니다.');
  };
  const cancelConfirm = () => alert('취소했습니다.');

  const hndleDelete = cofirmDelete('정말 삭제하시겠습니까?', deleteConfirm, cancelConfirm);

  // const deleteImg = () => {
  //   if (window.confirm('정말 삭제하시겠습니까?')) {
  //     setUploadImg('');
  //   }
  // };

  return (
    <>
      <PostMain>
        <h2 className='a11y-hidden'>게시글 작성</h2>
        <UserProfile src={userImg ? `https://api.mandarin.weniv.co.kr/${userImg}` : Ellipse} />
        <PostArticle>
          <h3 className='a11y-hidden'>게시글 작성 form</h3>
          <Form>
            <Textarea name='text' placeholder='게시글 입력하기..'></Textarea>
            <UploadImgBtn htmlFor='imgUpload'></UploadImgBtn>
            <input className='a11y-hidden' type='file' id='imgUpload' onChange={handleImgInput} accept='image/*' />
          </Form>
          <section>
            <h4 className='a11y-hidden'>업로드 이미지</h4>
            <ul>
              {uploadImg !== '' && (
                <Li>
                  <UploadImg src={`https://api.mandarin.weniv.co.kr/${uploadImg}`} alt='게시글 업로드 이미지' />
                  <DeleteBtn onClick={hndleDelete}>
                    <span className='a11y-hidden'>업로드 이미지 삭제</span>
                  </DeleteBtn>
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
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => `${theme.colors.primary} url(${uploadIcon}) no-repeat center`};
`;

const DeleteBtn = styled.button`
  width: 22px;
  height: 22px;
  top: 6px;
  right: 6px;
  background: url(${removeIcon}) no-repeat center / contain;
  position: absolute;
  cursor: pointer;
`;
