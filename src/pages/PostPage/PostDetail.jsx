import React, { useContext, useEffect, useState } from 'react';
import FeedHeader from '../../components/common/Header/FeedHeader';
import Comment from '../../pages/ChatPage/Comment';
import { AuthContextStore } from '../../context/AuthContext';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import { useParams } from 'react-router-dom';
import PostItem from '../../components/Post/PostItem';
import PostCommentList from '../../components/Post/PostCommentList';

const PostDetail = () => {
  const { post_id } = useParams();
  const [myProfileImg, setMyProfileImg] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const [commentList, setCommentList] = useState([]);
  const [commentCnt, setCommentCnt] = useState(0);
  const [post, setPost] = useState({});

  //댓글 갯수 동적 업데이트 위한 요청
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch(`https://api.mandarin.weniv.co.kr/post/${post_id}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          },
        });
        const result = await res.json();
        console.log(result.post);
        setPost(result.post);
        setCommentCnt(result.post.commentCount);
      } catch (err) {
        console.log(err.message);
      }
    };
    getPost();
  }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        //댓글 리스트 정보 요청
        const res = await fetch(`https://api.mandarin.weniv.co.kr/post/${post_id}/comments/?limit=0&skip=0`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          },
        });
        const result = await res.json();
        console.log(result);
        setCommentList(result.comments);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUserInfo();
  }, [post_id]);

  // console.log(commentList);

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
              {Object.keys(post).length > 0 && <PostItem post={post} commentCnt={commentCnt} />}
              <h2 className='a11y-hidden'>댓글 해당 게시물</h2>
            </PostArticle>
          </PostWrapper>
        </ArticleWrapper>
        <CommentWrapper>
          <PostSection>
            <h2 className='a11y-hidden'>댓글 목록</h2>
            <PostCommentList
              key={commentList.length}
              commentList={commentList}
              postId={post_id}
              setCommentList={setCommentList}
              setCommentCnt={setCommentCnt}
            />
          </PostSection>
        </CommentWrapper>
      </Main>
      <Comment
        atChatroom={false}
        userProfileImg={myProfileImg}
        postId={post_id}
        setCommentCnt={setCommentCnt}
        setCommentList={setCommentList}
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
