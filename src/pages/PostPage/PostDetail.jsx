import React, { useContext, useEffect, useState } from 'react';
import FeedHeader from '../../components/common/Header/FeedHeader';
import Comment from '../../pages/ChatPage/Comment';
import { AuthContextStore } from '../../context/AuthContext';
import styled from 'styled-components';
import PostInComment from '../../components/Post/PostInComment';
import Wrapper from '../../components/common/Wrapper/Wrapper';

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
      <Main>
        <PostWrapper>
          <PostArticle>
            댓글 해당 게시물
            <h2 className='a11y-hidden'>댓글 해당 게시물</h2>
            <PostInComment />
          </PostArticle>
          <PostSection>
            <h2 className='a11y-hidden'>댓글 목록</h2>
            <Ul>
              <Li>
                댓글 목록
                {/* PostItem 혹은 PostUserProfileImg 공통 컴퍼넌트를 쓰고 싶지만 프랍스가 너무 많아서 못쓰겠어.. */}
              </Li>
            </Ul>
          </PostSection>
        </PostWrapper>
      </Main>
      {/* <PostDetailComment /> */}
      <Comment defaultProfileImg={defaultProfileImg} userProfileImg={userProfileImg} />
    </>
  );
};

export default PostDetail;

const Main = styled.main``;
const PostWrapper = styled(Wrapper)`
  margin-top: 48px;
`;
const PostArticle = styled.article``;
const PostSection = styled.section``;
const Ul = styled.ul``;
const Li = styled.li``;
