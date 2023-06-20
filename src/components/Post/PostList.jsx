import React, { useContext, useEffect, useState } from 'react';
import PostItem from './PostItem';
import styled from 'styled-components';
import { AuthContextStore } from '../../context/AuthContext';
import Wrapper from '../common/Wrapper/Wrapper';

const PostList = ({ isLoading, posts, userInfo, onClick, setPostId }) => {
  const [userProfileImg, setUserProfileImg] = useState('');
  const [userName, setUserName] = useState('');

  console.log(posts);

  let dateString = new Date();
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let today = dateString.toLocaleDateString('ko-KR', options);

  return (
    <Container>
      <Wrapper>
        {isLoading ? (
          <NoPost>아직 작성된 게시물이 없습니다.</NoPost>
        ) : (
          <Ul>
            {posts.map((post) => {
              return (
                <Li key={post.id}>
                  <PostItem
                    userInfo={userInfo}
                    postContent={post.content}
                    postImg={post.image}
                    today={today}
                    onClick={onClick}
                    setPostId={() => setPostId(post.id)}
                  />
                </Li>
              );
            })}
          </Ul>
        )}
      </Wrapper>
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
  margin-bottom: 60px;
`;

const NoPost = styled.p`
  font-size: 14px;
`;
