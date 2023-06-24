import React, { useContext, useEffect, useState } from 'react';
import FeedHeader from '../../components/common/Header/FeedHeader';
import Comment from '../../pages/ChatPage/Comment';
import { AuthContextStore } from '../../context/AuthContext';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import { useParams } from 'react-router-dom';
import PostItem from '../../components/Post/PostItem';
import PostCommentItem from '../../components/Post/PostCommentItem';

const PostDetail = () => {
  const [userInfo, setUserInfo] = useState({});
  const { post_id } = useParams();
  const [myProfileImg, setMyProfileImg] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const [comments, setComments] = useState([]);
  const [isCommentUpdated, setIsCommentUpdated] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        // 게시물 정보 요청
        const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${post_id}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setUserInfo(data.post);

        //댓글 리스트 정보 요청
        const res = await fetch(`https://api.mandarin.weniv.co.kr/post/${post_id}/comments/?limit=10&skip=0`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          },
        });
        const result = await res.json();
        setComments(result.comments);
        setIsCommentUpdated(false); //comment에서 댓글을 올리면 true로 바뀌도로 설정돼있는데, 그럼 이 댓글 리스트 정보 요청이 발생하고, list가 업데이트됨. 그 이후 본래 false 상태로 전환 해줘야 이후 게시를해도 상태를 재업데이트 할 수 있음.
      } catch (err) {
        console.log(err.message);
      }
    };
    getUserInfo();
  }, [isCommentUpdated, post_id]);

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
        setMyProfileImg(data.user.image);
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
                isCommentUpdated={isCommentUpdated}
                userInfo={userInfo.author}
                itemPostId={post_id}
                postContent={userInfo.content}
                postImg={userInfo.image}
              />
              <h2 className='a11y-hidden'>댓글 해당 게시물</h2>
            </PostArticle>
          </PostWrapper>
        </ArticleWrapper>
        <CommentWrapper>
          <PostSection>
            <h2 className='a11y-hidden'>댓글 목록</h2>
            <PostCommentItem comments={comments} />
          </PostSection>
        </CommentWrapper>
      </Main>
      <Comment
        setIsCommentUpdated={setIsCommentUpdated}
        atChatroom={false}
        userProfileImg={myProfileImg}
        postId={post_id}
      />
    </>
  );
};

export default PostDetail;

const Main = styled.main``;
const ArticleWrapper = styled.div`
  width: 100%;
  margin-top: 48px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;
const PostWrapper = styled(Wrapper)`
  padding: 20px 16px;
`;
const CommentWrapper = styled(Wrapper)`
  padding: 30px 16px;
  margin-bottom: 62.5px;
`;
const PostArticle = styled.article``;
const PostSection = styled.section``;
