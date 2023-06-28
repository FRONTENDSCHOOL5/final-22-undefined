import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import SaveHeader from '../../components/common/Header/SaveHeader';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import { editPost } from '../../api/post';
import * as S from './PostEdit.style';
import { getMyInfo } from '../../api/profile';

const ALLOWED_EXTENSIONS = ['.jpg', '.gif', '.png', '.jpeg', '.bmp', '.tif', '.heic'];

const PostEdit = () => {
  const { state } = useLocation();
  const loadedText = state.content;
  const loadedlImg = state.image ? [state.image.replaceAll('https://api.mandarin.weniv.co.kr/', '')][0].split(',') : []; // state로 받아온 image는 주소가 전부 포함돼 있기 때문에 잘라줌. 이미지가 빈값이어서 ['']면 빈 엑박 이미지가 들어감. 또한 초깃값이 []아니면 map에서 돌지 않음.

  const [userContent, setUserContent] = useState(loadedText); // edit 페이지 url로 접속시, 초기값은 pathname과 List~Item에서 navigate state를 통해 가져온 content와 image값을 활용함.
  const [uploadedImages, setUploadedImages] = useState(loadedlImg);
  const [userProfileImg, setUserProfileImg] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const textarea = useRef(); // textarea 높이 자동 조절을 위해 쓰이는 ref
  const navigate = useNavigate();
  const postId = state.postId;

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

  // 게시물 수정
  const handleEdit = async () => {
    try {
      let image;
      if (uploadedImages.length === 0) image = '';
      else {
        image = uploadedImages.map((image) => `https://api.mandarin.weniv.co.kr/${image}`).join(',');
      }

      await editPost(postId, userToken, userContent, image);
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

  return (
    <>
      <SaveHeader name='업로드' mode={isActivated ? 'default' : 'disabled'} onClick={handleEdit} />
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
              {uploadedImages.map((image, index) => (
                <S.Li key={index}>
                  <S.UploadImg src={`https://api.mandarin.weniv.co.kr/${image}`} alt='게시글 업로드 이미지' />
                  <S.DeleteBtn onClick={() => deleteConfirm(index)}>
                    <span className='a11y-hidden'>업로드 이미지 삭제</span>
                  </S.DeleteBtn>
                </S.Li>
              ))}
            </S.Ul>
            <S.UploadImgBtn htmlFor='imgUpload'></S.UploadImgBtn>
            <S.UploadImgInp
              className='a11y-hidden'
              type='file'
              id='imgUpload'
              onChange={handleImgInput}
              accept='image/*'
              multiple
            />
          </S.Section>
        </S.PostArticle>
      </S.PostMain>
    </>
  );
};

export default PostEdit;
