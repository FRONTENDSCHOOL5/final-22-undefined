import React, { useState } from 'react';
import * as S from './PostSection.style';
import PostAlbum from './PostAlbum';
import PostList from './PostList';

const PostSection = () => {
  const [isList, setIsList] = useState(true);

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
      {isList ? <PostList /> : <PostAlbum />}
    </S.Section>
  );
};

export default PostSection;
