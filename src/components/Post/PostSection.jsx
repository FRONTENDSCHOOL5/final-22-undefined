import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from './PostSection.style';
import PostAlbum from './PostAlbum';
import PostList from './PostList';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import Wrapper from '../common/Wrapper/Wrapper';
import { getPosts } from '../../api/post';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const PostSection = () => {
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [isList, setIsList] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const { target, skip, markAsLast } = useIntersectionObserver(posts, isList);

  // 현재 프로필의 accountname
  const userId = accountname ? accountname : userAccountname;
  // 유저 게시물 정보
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await getPosts(userId, skip, userToken);
        if (data.post.length < 6) markAsLast();
        setPosts((prev) => [...prev, ...data.post]);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };

    fetch();
  }, [userId, userToken, skip]);

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
