import React, { forwardRef, useState } from 'react';
import PostItem from './PostItem';
import styled from 'styled-components';
import Wrapper from '../common/Wrapper/Wrapper';
import PostModal from '../common/Modal/PostModal';
import PostItemSkeleton from '../Skeleton/PostItemSkeleton';

const PostList = forwardRef(({ isLoading, posts, setPosts }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postId, setPostId] = useState('');
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (id) => {
    openModal();
    setPostId(id);
  };
  // console.log(isLoading);

  return (
    <Container>
      <Wrapper>
        <Ul>
          {isLoading ? (
            <>
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
              <PostItemSkeleton />
            </>
          ) : (
            posts.map((post, index) => (
              <Li key={post.id} ref={index === posts.length - 1 ? ref : null}>
                <PostItem
                  post={post}
                  onClick={() => {
                    handleClick(post.id);
                  }}
                  commentCnt={post.commentCount}
                />
              </Li>
            ))
          )}
        </Ul>
        {isModalOpen && <PostModal onClose={closeModal} postId={postId} posts={posts} setPosts={setPosts} />}
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
