import React from 'react';
import * as S from './PostSection.style';
import PostAlbum from './PostAlbum';

const PostSection = () => {
  return (
    <S.Section>
      <S.Title className='a11y-hidden'>포스트</S.Title>
      <S.Header>
        <S.ListBtn>
          <span className='a11y-hidden'>리스트로 보기</span>
        </S.ListBtn>
        <S.AlbumBtn>
          <span className='a11y-hidden'>리스트로 보기</span>
        </S.AlbumBtn>
      </S.Header>
      <PostAlbum />
    </S.Section>
  );
};

export default PostSection;
