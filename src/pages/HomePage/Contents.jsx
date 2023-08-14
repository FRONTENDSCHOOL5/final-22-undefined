import { React, forwardRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Contents.style';

import PostList from '../../components/Post/PostList';

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
    <S.Main>
      <h1>Home페이지</h1>
      {posts.length !== 0 ? (
        <>
          <PostList posts={posts} setPosts={setPosts} ref={ref} />
        </>
      ) : (
        <S.NoFollower>
          <p>유저를 검색해 팔로우 해보세요!</p>
          <S.StyledButton size='lg' onClick={handleClick}>
            검색하기
          </S.StyledButton>
        </S.NoFollower>
      )}
      <S.TopButton className='topBtn' show={showButton} onClick={scrollToTop}>
        Top
      </S.TopButton>
    </S.Main>
  );
});

export default Contents;
