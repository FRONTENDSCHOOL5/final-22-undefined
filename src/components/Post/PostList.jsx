import React, { useState } from 'react';
import PostItem from './PostItem';
import styled from 'styled-components';
import Wrapper from '../common/Wrapper/Wrapper';
import PostModal from '../common/Modal/PostModal';

const PostList = ({ isLoading, posts, userInfo, setPosts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postId, setPostId] = useState('');

  let dateString = new Date();
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let today = dateString.toLocaleDateString('ko-KR', options);

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
                    itemPostId={post.id}
                    onClick={() => handleClick(post.id)}
                  />
                </Li>
              );
            })}
          </Ul>
        )}
        {isModalOpen && <PostModal onClose={closeModal} postId={postId} posts={posts} setPosts={setPosts} />}
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
