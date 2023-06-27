import { React, forwardRef, useEffect, useState } from 'react';
import home from '../../assets/symbol-logo-gray.png';
import styled, { css } from 'styled-components';
import PostList from '../../components/Post/PostList';
import MainLayout from '../../components/common/MainLayout/MainLayout';

const Main = styled(MainLayout)`
  display: flex;
  justify-content: center;
`;

const NoFollower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 20px;
    &::before {
      content: '';
      display: block;
      background: url(${home}) no-repeat center/ 100px 100px;
      width: 100px;
      height: 100px;
      margin: 0 auto 25px;
    }
  }

  a {
    width: 120px;
    height: 44px;
    display: inline-block;
    padding: 15px 0;
    border-radius: 44px;
    ${({ theme: { colors } }) => css`
      background-color: ${colors.primary};
      border-top: 1px solid ${colors.gray};
      color: ${colors.white};
    `}
    font-weight: 500;
    font-size: 14px;
    line-height: 17.53px;
    text-align: center;
  }
`;

const TopButton = styled.button`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  bottom: 80px;
  right: 50px;
  z-index: 999;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Contents = forwardRef(({ posts, setPosts }, ref) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Main>
      {posts.length !== 0 ? (
        <>
          <PostList posts={posts} setPosts={setPosts} ref={ref} />
        </>
      ) : (
        <NoFollower>
          <p>유저를 검색해 팔로우 해보세요!</p>
          <a href='/search'>검색하기</a>
        </NoFollower>
      )}
      <TopButton className='topBtn' show={showButton} onClick={scrollToTop}>
        Top
      </TopButton>
    </Main>
  );
});

export default Contents;
