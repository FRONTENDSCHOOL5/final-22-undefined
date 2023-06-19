import React, { useContext, useEffect, useState } from 'react';
import * as S from './PostSection.style';
import PostAlbum from './PostAlbum';
import PostList from './PostList';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';

const PostSection = () => {
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [isList, setIsList] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // 현재 프로필의 accountname
  const userId = accountname ? accountname : JSON.parse(userAccountname);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${userId}/userpost`, {
          headers: { Authorization: `Bearer ${JSON.parse(userToken)}`, 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        console.log(data);

        setPosts(data.post);

        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    getPosts();
  }, [userId, userToken]);

  return (
    <S.Section>
      <S.Title className='a11y-hidden'>포스트</S.Title>
      <S.Header>
        <S.ListBtn onClick={() => setIsList(true)} isList={isList}>
          <span className='a11y-hidden'>리스트로 보기</span>
        </S.ListBtn>
        <S.AlbumBtn onClick={() => setIsList(false)} isAlbum={!isList}>
          <span className='a11y-hidden'>앨범으로 보기</span>
        </S.AlbumBtn>
      </S.Header>
      {isList ? <PostList posts={posts} isLoading={isLoading} /> : <PostAlbum posts={posts} />}
    </S.Section>
  );
};

export default PostSection;
