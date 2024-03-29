import React, { forwardRef, useState } from 'react';
import PostItem from './PostItem';
import styled from 'styled-components';
import Wrapper from '../common/Wrapper/Wrapper';
import PostModal from '../common/Modal/PostModal';

const PostList = forwardRef(({ posts, setPosts }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postId, setPostId] = useState(null);

  const openModal = (postId) => {
    setIsModalOpen(true);
    setPostId(postId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPostId(null);
  };

  return (
    <Container>
      <Wrapper>
        <Ul>
          {posts.map((post, index) => (
            <Li key={post.id} ref={index === posts.length - 1 ? ref : null}>
              <PostItem
                post={post}
                onClick={() => {
                  openModal(post.id);
                }}
                commentCnt={post.commentCount}
              />
            </Li>
          ))}
        </Ul>
        {isModalOpen && (
          <PostModal
            onClose={closeModal}
            postId={postId}
            posts={posts}
            setPosts={setPosts}
            postAuthor={posts.find((post) => post.id === postId)?.author.accountname}
          />
        )}
      </Wrapper>
    </Container>
  );
});

export default PostList;

const Ul = styled.ul``;

const Li = styled.li`
  /* border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`}; */
  padding-bottom: 20px;
  & + & {
    margin-top: 50px;
  }
`;

const Container = styled.div`
  padding: 20px 16px;
  margin-bottom: 60px;
`;
