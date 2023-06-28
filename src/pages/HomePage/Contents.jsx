import { React, forwardRef, useEffect, useState } from 'react';
import homeLogo from '../../assets/homeLogo.svg';
import styled, { css } from 'styled-components';
import PostList from '../../components/Post/PostList';
import MainLayout from '../../components/common/MainLayout/MainLayout';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/Button';

const Main = styled(MainLayout)``;

const NoFollower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 82vh;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 20px;
    &::before {
      content: '';
      display: block;
      background: url(${homeLogo}) no-repeat center/ contain;
      width: 130px;
      height: 130px;
      margin: 0 auto 25px;
    }
  }
`;

const StyledButton = styled(Button)`
  width: 120px;
`;

const TopButton = styled.button`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 999;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
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
      if (window.scrollY > 1200) {
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

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/search');
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
          <StyledButton size='lg' onClick={handleClick}>
            검색하기
          </StyledButton>
        </NoFollower>
      )}
      <TopButton className='topBtn' show={showButton} onClick={scrollToTop}>
        Top
      </TopButton>
    </Main>
  );
});

export default Contents;
