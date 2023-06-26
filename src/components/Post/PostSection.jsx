import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from './PostSection.style';
import PostAlbum from './PostAlbum';
import PostList from './PostList';
import { useLocation, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import Wrapper from '../common/Wrapper/Wrapper';

const PostSection = () => {
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [isList, setIsList] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const target = useRef(null);
  const [skip, setSkip] = useState(0);
  const [isLast, setIsLast] = useState(false); // 더 이상 불러올 게시물이 없을 경우
  const location = useLocation();

  // 현재 프로필의 accountname
  const userId = accountname ? accountname : userAccountname;

  useEffect(() => {
    setPosts([]);
    setSkip(0);
    setIsLast(false);
  }, [location.pathname]);

  // 유저 게시물 정보
  useEffect(() => {
    const getPosts = async () => {
      console.log(skip, 'skip');
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${userId}/userpost/?limit=6&skip=${skip}`, {
          headers: { Authorization: `Bearer ${userToken}`, 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        // console.log(data);
        if (data.post.length < 6) setIsLast(true);
        // *** 남의 프로필 페이지 갔다가 내 프로필 페이지에 오면 다른 사람의 게시글이 포함 되어 있음..

        setPosts((prev) => [...prev, ...data.post]);
        // setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };

    getPosts();
  }, [userId, userToken, skip]);

  const callback = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setSkip((prev) => prev + 6);
    }
  };

  useEffect(() => {
    if (isLast) return;
    const observer = new IntersectionObserver(callback, {
      threshold: 1,
    });

    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [posts, isLast, isList]);

  return (
    <S.Section>
      <S.Title className='a11y-hidden'>포스트</S.Title>
      <S.Header>
        <Wrapper>
          <S.ListBtn onClick={() => setIsList(true)} isList={isList}>
            <span className='a11y-hidden'>리스트로 보기</span>
          </S.ListBtn>
          <S.AlbumBtn onClick={() => setIsList(false)} isAlbum={!isList}>
            <span className='a11y-hidden'>앨범으로 보기</span>
          </S.AlbumBtn>
        </Wrapper>
      </S.Header>
      {posts.length > 0 &&
        (isList ? (
          <PostList posts={posts} setPosts={setPosts} ref={target} isLoading={isLoading} />
        ) : (
          <PostAlbum posts={posts} />
        ))}
    </S.Section>
  );
};

export default PostSection;
