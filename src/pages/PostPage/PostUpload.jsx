import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import uploadIcon from '../../assets/icon/icon-upload.png';
import removeIcon from '../../assets/icon/icon-delete.svg';
import { AuthContextStore } from '../../context/AuthContext';
import SaveHeader from '../../components/common/Header/SaveHeader';
import { useLocation, useNavigate } from 'react-router-dom';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];

const Post = () => {
  const { pathname, state } = useLocation();
  console.log(state.image);
  const loadedText = pathname.includes('edit') ? state.content : '';
  const loadedlImg = pathname.includes('edit')
    ? [state.image.replaceAll('https://api.mandarin.weniv.co.kr/', '')][0].split(',')
    : []; // state로 받아온 image는 주소가 전부 포함돼 있기 때문에 잘라줌.
  // console.log(loadedlImg);
  const [userContent, setUserContent] = useState(loadedText); // edit 페이지 url로 접속시, 초기값은 pathname과 List~Item에서 navigate state를 통해 가져온 content와 image값을 활용함.
  const [uploadedImages, setUploadedImages] = useState(loadedlImg);
  const [userProfileImg, setUserProfileImg] = useState('');
  const { userToken } = useContext(AuthContextStore);
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
      let image;
      if (uploadedImages.length === 0) image = '';
      else {
        image = uploadedImages.map((image) => `https://api.mandarin.weniv.co.kr/${image}`).join(',');
      }
      const contents = userContent.replace('\r\n', '<br>');
      const res = await fetch('https://api.mandarin.weniv.co.kr/post', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ post: { content: contents, image } }),
      });
      const data = await res.json();
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

    const length = e.target.files.length;

    if (uploadedImages.length + length > 3) return alert('이미지는 최대 3개까지 업로드할 수 있습니다.');

    const formData = new FormData();
    for (let i = 0; i < length; i++) {
      const file = e.target.files[i];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (ALLOWED_EXTENSIONS.includes(`.${fileExtension}`)) {
        formData.append('image', file);
      }
    }

    try {
      const res = await fetch('https://api.mandarin.weniv.co.kr/image/uploadfiles', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      console.log(data);

      const filenames = data.map((data) => data.filename);
      setUploadedImages((prev) => [...prev, ...filenames]);
    } catch (error) {
      console.log(error.message);
    }
  };
  // 이미지 삭제 확인
  const deleteConfirm = (index) => {
    setUploadedImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
    alert('삭제되었습니다.');
  };

  // textarea 높이 자동 조절
  const handleContent = (e) => {
    setUserContent(e.target.value);
    textarea.current.style.height = 'auto'; // 높이 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  // 버튼 활성화 여부
  let isActivated = false;
  if (userContent || uploadedImages.length > 0) isActivated = true;

  // let userImgUrl = `https://api.mandarin.weniv.co.kr/${userImg}`
  // console.log(uploadedImages[0].split(','));
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
          </Form>
          <Section>
            <Ul>
              {uploadedImages.map((image, index) => (
                <Li key={index}>
                  <UploadImg src={`https://api.mandarin.weniv.co.kr/${image}`} alt='게시글 업로드 이미지' />
                  <DeleteBtn onClick={() => deleteConfirm(index)}>
                    <span className='a11y-hidden'>업로드 이미지 삭제</span>
                  </DeleteBtn>
                </Li>
              ))}
            </Ul>
            <UploadImgBtn htmlFor='imgUpload'></UploadImgBtn>
            <UploadImgInp
              className='a11y-hidden'
              type='file'
              id='imgUpload'
              onChange={handleImgInput}
              accept='image/*'
              multiple
            />
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
  line-height: 20px;
  word-break: break-all;

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
  max-width: 304px;
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
