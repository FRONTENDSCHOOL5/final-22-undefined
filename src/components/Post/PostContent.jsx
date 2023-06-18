import React from 'react';
import PostUserProfileImg from './PostUserProfileImg';

const PostContent = () => {
  const [userProfileImg, setUserProfileImg] = useState('');

  // 유저 프로필 이미지 요청
  useEffect(() => {
    const uploadUserImg = async () => {
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
    uploadUserImg();
  }, []);
  return (
    <>
      <PostUserProfileImg userProfileImg={userProfileImg} />
    </>
  );
};

export default PostContent;
