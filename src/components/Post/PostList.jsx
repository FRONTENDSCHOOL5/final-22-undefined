import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
`;

const NoPost = styled.p`
  font-size: 14px;
`;

const PostList = ({ isLoading }) => {
  return <Container>{isLoading ? <NoPost>아직 작성된 게시물이 없습니다.</NoPost> : 'postList'}</Container>;
};

export default PostList;
