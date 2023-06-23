import React, { useContext, useEffect, useState } from 'react';
import FeedHeader from '../../components/common/Header/FeedHeader';
import Comment from '../../pages/ChatPage/Comment';
import { AuthContextStore } from '../../context/AuthContext';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import { useParams } from 'react-router-dom';
import PostItem from '../../components/Post/PostItem';

const PostDetail = () => {
  const [userInfo, setUserInfo] = useState({});
  const { post_id } = useParams();
  const [userProfileImg, setUserProfileImg] = useState('');
  const { userToken } = useContext(AuthContextStore);

  //userInfo를 위한 요청
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${post_id}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setUserInfo(data.post);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUserInfo();
  }, [post_id]);

  // 프로필 이미지 요청(댓글 페이지는 언제나 자기 프로필 사진)
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

  return (
    <>
      <FeedHeader />
      <Main>
        <ArticleWrapper>
          <PostWrapper>
            <PostArticle>
              <PostItem
                userInfo={userInfo.author}
                itemPostId={post_id}
                postContent={userInfo.content}
                postImg={userInfo.image}
              />
              <h2 className='a11y-hidden'>댓글 해당 게시물</h2>
            </PostArticle>
          </PostWrapper>
        </ArticleWrapper>
        <PostSection>
          <h2 className='a11y-hidden'>댓글 목록</h2>
          <Ul>
            <Li>
              댓글 목록
              {/* PostItem 혹은 PostUserProfileImg 공통 컴퍼넌트를 쓰고 싶지만 프랍스가 너무 많아서 못쓰겠어.. */}
            </Li>
          </Ul>
        </PostSection>
      </Main>
      {/* <PostDetailComment /> */}
      <Comment atChatroom={false} userProfileImg={userProfileImg} postId={post_id} />
    </>
  );
};

export default PostDetail;

const Main = styled.main``;
const ArticleWrapper = styled.div`
  width: 100%;
  padding: 20px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;
const PostWrapper = styled(Wrapper)`
  margin-top: 48px;
`;
const PostArticle = styled.article``;
const PostSection = styled.section``;
const Ul = styled.ul``;
const Li = styled.li``;
