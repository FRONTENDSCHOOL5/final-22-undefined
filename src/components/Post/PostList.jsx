import React, { forwardRef, useState } from 'react';
import PostItem from './PostItem';
import styled from 'styled-components';
import Wrapper from '../common/Wrapper/Wrapper';
import PostModal from '../common/Modal/PostModal';

const PostList = forwardRef(({ posts, userInfo, setPosts }, ref) => {
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

  return (
    <Container>
      <Wrapper>
        <Ul>
          {posts.map((post, index) => (
            <Li key={post.id} ref={index === posts.length - 1 ? ref : null}>
              <PostItem
                userInfo={userInfo}
                postContent={post.content}
                postImg={post.image}
                postDate={post.updatedAt}
                // post={post}
                itemPostId={post.id}
                onClick={() => handleClick(post.id)}
              />
            </Li>
          ))}
        </Ul>
        {isModalOpen && <PostModal onClose={closeModal} postId={postId} posts={posts} setPosts={setPosts} />}
      </Wrapper>
    </Container>
  );
});

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
