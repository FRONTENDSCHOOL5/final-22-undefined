import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import uploadIcon from '../../assets/icon/icon-upload.png';
import removeIcon from '../../assets/icon/icon-delete.svg';
import { AuthContextStore } from '../../context/AuthContext';
import SaveHeader from '../../components/common/Header/SaveHeader';
import { useNavigate } from 'react-router-dom';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];

const defaultProfileImg = 'http://146.56.183.55:5050/Ellipse.png';
const Post = () => {
  const [userProfileImg, setUserProfileImg] = useState(defaultProfileImg);
  const [uploadImg, setUploadImg] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const [userContent, setUserContent] = useState('');
  const textarea = useRef(); // textarea 높이 자동 조절을 위해 쓰이는 ref
  const navigate = useNavigate();

  // 유저 프로필 이미지 요청
  useEffect(() => {
    const handleUserImg = async () => {
      try {
        const res = await fetch('https://api.mandarin.weniv.co.kr/user/myinfo', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        const data = await res.json();
        setUserProfileImg(data.user.image);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleUserImg();
  }, []);

  // 게시물 업로드
  const uploadPost = async () => {
    try {
      const image = uploadImg ? `https://api.mandarin.weniv.co.kr/${uploadImg}` : '';
      const res = await fetch('https://api.mandarin.weniv.co.kr/post', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ post: { content: userContent, image } }),
      });

      const data = await res.json();
      // console.log(data);
      navigate('/profile');
    } catch (error) {
      console.log(error.message);
    }
  };

  // 이미지 업로드
  const handleImgInput = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    // console.log(file.name.split('.'));
    const fileExtension = file.name.split('.').slice(-1)[0].toLowerCase();
    // console.log(fileExtenstion);
    if (!ALLOWED_EXTENSIONS.includes(`.${fileExtension}`)) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('https://api.mandarin.weniv.co.kr/image/uploadfile', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      // console.log(data);
      // console.log(data.filename);
      setUploadImg(data.filename);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 이미지 삭제 확인
  const deleteConfirm = () => {
    setUploadImg('');
    alert('삭제되었습니다.');
  };
  const cancelConfirm = () => alert('취소했습니다.');

  const confirmDelete = (message = '', onConfirm, onCancel) => {
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

  const handleDelete = confirmDelete('정말 삭제하시겠습니까?', deleteConfirm, cancelConfirm);

  // textarea 높이 자동 조절
  const handleContent = (e) => {
    setUserContent(e.target.value);
    textarea.current.style.height = 'auto'; // 높이 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  // 버튼 활성화 여부
  let isActivated = false;
  if (userContent || uploadImg) isActivated = true;

  // let userImgUrl = `https://api.mandarin.weniv.co.kr/${userImg}`
  return (
    <>
      <SaveHeader name='업로드' mode={isActivated ? 'default' : 'disabled'} onClick={uploadPost} />
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
            <UploadImgBtn htmlFor='imgUpload'></UploadImgBtn>
            <UploadImgInp
              className='a11y-hidden'
              type='file'
              id='imgUpload'
              onChange={handleImgInput}
              accept='image/*'
            />
          </Form>
          <Section>
            <Ul>
              {uploadImg && (
                <Li>
                  <UploadImg src={`https://api.mandarin.weniv.co.kr/${uploadImg}`} alt='게시글 업로드 이미지' />
                  <DeleteBtn onClick={handleDelete}>
                    <span className='a11y-hidden'>업로드 이미지 삭제</span>
                  </DeleteBtn>
                </Li>
              )}
            </Ul>
          </Section>
        </PostArticle>
      </PostMain>
    </>
  );
};

export default Post;

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
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Ul = styled.ul``;

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
