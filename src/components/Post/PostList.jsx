import React, { forwardRef, useState } from 'react';
import PostItem from './PostItem';
import styled from 'styled-components';
import Wrapper from '../common/Wrapper/Wrapper';
import PostModal from '../common/Modal/PostModal';

const PostList = forwardRef(({ posts, setPosts }, ref) => {
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // console.log(isLoading);
>>>>>>> 05a585f (fix: isLoading 상태 삭제)
=======
>>>>>>> d574ef1 (fix: isLoading 상태 삭제)
=======
>>>>>>> bc4cfbc (fix: isLoading 상태 삭제)
=======
=======
  // console.log(isLoading);
>>>>>>> 05a585f (fix: isLoading 상태 삭제)
>>>>>>> 378221f (fix: isLoading 상태 삭제)

=======
  console.log(isLoading);
>>>>>>> c5f2bc8 (fix: isLoading 상태 삭제)
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 8de1e19 (fix: isLoading 상태 삭제)
=======
>>>>>>> d574ef1 (fix: isLoading 상태 삭제)
<<<<<<< HEAD
>>>>>>> 0ce1f73 (fix: isLoading 상태 삭제)
=======
=======
=======

>>>>>>> 8de1e19 (fix: isLoading 상태 삭제)
>>>>>>> bc4cfbc (fix: isLoading 상태 삭제)
<<<<<<< HEAD
>>>>>>> a354687 (fix: isLoading 상태 삭제)
=======
=======

>>>>>>> 0804201 (fix: 깃 머지 충돌 오류)
>>>>>>> 12de856 (fix: 깃 머지 충돌 오류)
  return (
    <Container>
      <Wrapper>
        <Ul>
          {posts.map((post, index) => (
            <Li key={post.id} ref={index === posts.length - 1 ? ref : null}>
              <PostItem
                post={post}
                onClick={() => {
                  handleClick(post.id);
                }}
                commentCnt={post.commentCount}
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
