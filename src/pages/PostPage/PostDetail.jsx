import React, { useContext, useEffect, useState } from 'react';
import FeedHeader from '../../components/common/Header/FeedHeader';
import ChatComment from '../../pages/ChatPage/ChatComment';
import { AuthContextStore } from '../../context/AuthContext';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import { useParams } from 'react-router-dom';
import PostItem from '../../components/Post/PostItem';
import PostCommentList from '../../components/Post/PostCommentList';
import { getSinglePost } from '../../api/post';
import { getMyInfo } from '../../api/profile';
import { getComments } from '../../api/comment';
import { useRef } from 'react';

const PostDetail = () => {
  const { post_id } = useParams();
  const [myProfileImg, setMyProfileImg] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const [commentList, setCommentList] = useState([]);
  const [commentCnt, setCommentCnt] = useState(0);
  const [post, setPost] = useState({});
  const target = useRef(null);

  //댓글 갯수 동적 업데이트 위한 요청
  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await getSinglePost(post_id, userToken);
        setPost(data.post);
        setCommentCnt(data.post.commentCount);
      } catch (err) {
        console.log(err.message);
      }
    };
    getPost();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        //댓글 리스트 정보 요청
        const data = await getComments(post_id, userToken);
        setCommentList(data.comments);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetch();
  }, [post_id]);

  // console.log(commentList);

  // 프로필 이미지 요청(댓글 페이지는 언제나 자기 프로필 사진)
  useEffect(() => {
    const handleUserImg = async () => {
      try {
        const data = await getMyInfo(userToken);
        setMyProfileImg(data.user.image);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleUserImg();
  }, []);

  useEffect(() => {
    if (target.current) {
      target.current.focus();
    }
  }, [target.current]);

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
      <ChatComment
        ref={target}
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
