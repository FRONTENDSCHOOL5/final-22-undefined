import React, { useContext, useEffect, useState } from 'react';
import PostUserProfileImg from './PostUserProfileImg';
import { AuthContextStore } from '../../context/AuthContext';
import Wrapper from '../common/Wrapper/Wrapper';
import { useParams } from 'react-router-dom';

const PostContent = () => {
  const [userProfileImg, setUserProfileImg] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const { accountname } = useParams();
  // 유저 프로필 이미지 요청
  useEffect(() => {
    const uploadMyImg = async () => {
      try {
        const res = await fetch('https://api.mandarin.weniv.co.kr/user/myinfo', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`,
          },
        });
        const data = await res.json();
        setUserProfileImg(data.user.image);
      } catch (error) {
        console.log(error.message);
      }
    };
    uploadMyImg();
  }, []);

  useEffect(() => {
    const uploadMyContent = async () => {
      try {
        const res = await fetch(`https://api.mandarin.weniv.co.kr/post/${accountname}/userpost`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`,
            'Content-type': 'application/json',
          },
        });
        const data = await res.json();
        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    uploadMyContent();
  }, []);

  return (
    <>
      <Wrapper>
        <PostUserProfileImg userProfileImg={userProfileImg} />
      </Wrapper>
    </>
  );
};

export default PostContent;
