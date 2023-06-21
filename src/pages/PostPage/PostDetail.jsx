import React, { useContext, useEffect, useState } from 'react';
import FeedHeader from '../../components/common/Header/FeedHeader';
import Comment from '../../pages/ChatPage/Comment';
import { AuthContextStore } from '../../context/AuthContext';

const defaultProfileImg = 'http://146.56.183.55:5050/Ellipse.png';

const PostDetail = () => {
  const [userProfileImg, setUserProfileImg] = useState(defaultProfileImg);
  const { userToken } = useContext(AuthContextStore);

  // 프로필 이미지 요청(댓글 페이지는 언제나 자기 프로필 사진)
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
        setUserProfileImg(data.user.image);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleUserImg();
  }, []);
  return (
    <>
      <FeedHeader />
      <PostDetailComment />
      <Comment defaultProfileImg={defaultProfileImg} userProfileImg={userProfileImg} />
    </>
  );
};

export default PostDetail;
