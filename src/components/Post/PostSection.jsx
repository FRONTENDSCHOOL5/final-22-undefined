import React, { useContext, useEffect, useState } from 'react';
import * as S from './PostSection.style';
import PostAlbum from './PostAlbum';
import PostList from './PostList';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import Wrapper from '../common/Wrapper/Wrapper';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const PostSection = ({ userInfo, onClick, setPostId }) => {
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 3dfcb90 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 4ea439b (fix: 머지 오류 충돌 해결)
const PostSection = ({ userInfo, onClick, setPostId }) => {
=======
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> f32b37f (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> e5aebaa (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 5c4af22 (fix: 머지 오류 충돌 해결)
=======
const PostSection = ({ userInfo, onClick, setPostId }) => {
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 158c390 (fix: 머지 오류 충돌 해결)
=======
=======
=======
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
const PostSection = ({ userInfo, onClick, setPostId }) => {
=======
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> e5aebaa (fix: 머지 오류 충돌 해결)
=======
=======
=======
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
>>>>>>> 5c4af22 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
const PostSection = ({ userInfo, onClick, setPostId }) => {
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
const PostSection = ({ userInfo, onClick, setPostId }) => {
=======
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
const PostSection = ({ userInfo }) => {
=======
const PostSection = ({ onClick, setPostId }) => {
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const PostSection = ({ userInfo }) => {
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
=======
const PostSection = () => {
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
=======
const PostSection = ({ onClick, setPostId }) => {
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> 158c390 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> e5aebaa (fix: 머지 오류 충돌 해결)
=======
const PostSection = ({ userInfo }) => {
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
=======
=======
const PostSection = () => {
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
const PostSection = ({ onClick, setPostId }) => {
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
=======
=======
=======
const PostSection = ({ onClick, setPostId }) => {
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> f32b37f (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 3dfcb90 (fix: 머지 오류 충돌 해결)
=======
=======
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 158c390 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
=======
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
=======
=======
const PostSection = ({ userInfo }) => {
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> e5aebaa (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
=======
=======
=======
=======
=======
const PostSection = () => {
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
>>>>>>> 5c4af22 (fix: 머지 오류 충돌 해결)
>>>>>>> 4ea439b (fix: 머지 오류 충돌 해결)
=======
const PostSection = ({ onClick, setPostId }) => {
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [isList, setIsList] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // 현재 프로필의 accountname
  const userId = accountname ? accountname : JSON.parse(userAccountname);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${userId}/userpost`, {
          headers: { Authorization: `Bearer ${JSON.parse(userToken)}`, 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        console.log(data);

        setPosts(data.post);

        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    getPosts();
  }, [userId, userToken]);

  return (
    <S.Section>
      <S.Title className='a11y-hidden'>포스트</S.Title>
      <S.Header>
        <Wrapper>
          <S.ListBtn onClick={() => setIsList(true)} isList={isList}>
            <span className='a11y-hidden'>리스트로 보기</span>
          </S.ListBtn>
          <S.AlbumBtn onClick={() => setIsList(false)} isAlbum={!isList}>
            <span className='a11y-hidden'>앨범으로 보기</span>
          </S.AlbumBtn>
        </Wrapper>
      </S.Header>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {isList ? <PostList userInfo={userInfo} posts={posts} isLoading={isLoading} /> : <PostAlbum posts={posts} />}
=======
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 3dfcb90 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 4ea439b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
      {isList ? (
        <PostList posts={posts} isLoading={isLoading} onClick={onClick} setPostId={setPostId} />
      ) : (
        <PostAlbum posts={posts} />
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
<<<<<<< HEAD
      {isList ? <PostList userInfo={userInfo} posts={posts} isLoading={isLoading} /> : <PostAlbum posts={posts} />}
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
=======
      {isList ? <PostList posts={posts} isLoading={isLoading} /> : <PostAlbum posts={posts} />}
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
=======
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> f32b37f (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 158c390 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> e5aebaa (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 5c4af22 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
=======
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
      {isList ? <PostList userInfo={userInfo} posts={posts} isLoading={isLoading} /> : <PostAlbum posts={posts} />}
=======
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
      {isList ? (
        <PostList posts={posts} isLoading={isLoading} onClick={onClick} setPostId={setPostId} />
      ) : (
        <PostAlbum posts={posts} />
      )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
=======
      {isList ? <PostList userInfo={userInfo} posts={posts} isLoading={isLoading} /> : <PostAlbum posts={posts} />}
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
=======
=======
      {isList ? <PostList posts={posts} isLoading={isLoading} /> : <PostAlbum posts={posts} />}
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
=======
=======
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> f32b37f (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 3dfcb90 (fix: 머지 오류 충돌 해결)
=======
=======
=======
=======
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
      {isList ? <PostList userInfo={userInfo} posts={posts} isLoading={isLoading} /> : <PostAlbum posts={posts} />}
=======
      {isList ? (
        <PostList posts={posts} isLoading={isLoading} onClick={onClick} setPostId={setPostId} />
      ) : (
        <PostAlbum posts={posts} />
      )}
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 158c390 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
=======
=======
=======
=======
      {isList ? <PostList userInfo={userInfo} posts={posts} isLoading={isLoading} /> : <PostAlbum posts={posts} />}
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> e5aebaa (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
=======
=======
=======
=======
=======
      {isList ? <PostList posts={posts} isLoading={isLoading} /> : <PostAlbum posts={posts} />}
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
>>>>>>> 5c4af22 (fix: 머지 오류 충돌 해결)
>>>>>>> 4ea439b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
    </S.Section>
  );
};

export default PostSection;
