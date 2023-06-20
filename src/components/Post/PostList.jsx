import React, { useContext, useEffect, useState } from 'react';
import PostItem from './PostItem';
import styled from 'styled-components';
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
=======
const PostList = ({ isLoading, posts, userInfo, onClick, setPostId }) => {
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 3dfcb90 (fix: 머지 오류 충돌 해결)
const PostList = ({ isLoading, posts, userInfo, onClick, setPostId }) => {
=======
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> f32b37f (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
const PostList = ({ isLoading, posts, userInfo, onClick, setPostId }) => {
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
const PostList = ({ isLoading, posts, userInfo, onClick, setPostId }) => {
=======
=======
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
const PostList = ({ isLoading, posts, userInfo }) => {
=======
const PostList = ({ isLoading, onClick, setPostId }) => {
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const PostList = ({ isLoading, posts, userInfo }) => {
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
=======
const PostList = ({ isLoading }) => {
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
=======
const PostList = ({ isLoading, onClick, setPostId }) => {
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
=======
const PostList = ({ isLoading, posts, userInfo }) => {
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
const PostList = ({ isLoading }) => {
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
const PostList = ({ isLoading, onClick, setPostId }) => {
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
const PostList = ({ isLoading, onClick, setPostId }) => {
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
>>>>>>> f32b37f (fix: 머지 오류 충돌 해결)
>>>>>>> 3dfcb90 (fix: 머지 오류 충돌 해결)
  const [userProfileImg, setUserProfileImg] = useState('');
  const [userName, setUserName] = useState('');

  console.log(posts);

  let dateString = new Date();
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let today = dateString.toLocaleDateString('ko-KR', options);

  return (
    <Container>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
      <Wrapper>
        {isLoading ? (
          <NoPost>아직 작성된 게시물이 없습니다.</NoPost>
        ) : (
          <Ul>
            {posts.map((post) => {
              return (
                <Li key={post.id}>
                  <PostItem userInfo={userInfo} postContent={post.content} postImg={post.image} today={today} />
                </Li>
              );
            })}
          </Ul>
        )}
      </Wrapper>
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
      {isLoading ? (
        <NoPost>아직 작성된 게시물이 없습니다.</NoPost>
      ) : (
        <Ul>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
          {postList.map((post) => {
            return (
              <Li key={post.id}>
                <PostItem
                  userProfileImg={userProfileImg}
                  userName={userName}
                  acountName={ParsedAccountName}
                  postContent={post.content}
                  postImg={post.image}
                  today={today}
                  onClick={onClick}
                  setPostId={() => setPostId(post.id)}
                />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
          {posts.map((post) => {
            return (
              <Li key={post.id}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
                <PostItem userInfo={userInfo} postContent={post.content} postImg={post.image} today={today} />
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
=======
                <PostItem
                  userProfileImg={userProfileImg}
                  userName={userName}
                  acountName={ParsedAccountName}
                  postContent={post.content}
                  postImg={post.image}
                  today={today}
                />
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
                <PostItem userInfo={userInfo} postContent={post.content} postImg={post.image} today={today} />
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
                <PostItem userInfo={userInfo} postContent={post.content} postImg={post.image} today={today} />
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
              </Li>
            );
          })}
        </Ul>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
    </Container>
  );
};

export default PostList;

const Ul = styled.ul``;

const Li = styled.li`
  & + & {
    margin-top: 20px;
  }
`;

const Container = styled.div`
  padding: 20px 16px;
<<<<<<< HEAD
<<<<<<< HEAD
  margin-bottom: 60px;
=======
>>>>>>> 0004abb (style: padding값 다른 요소로 변경)
=======
>>>>>>> 0004abb (style: padding값 다른 요소로 변경)
`;

const NoPost = styled.p`
  font-size: 14px;
`;
