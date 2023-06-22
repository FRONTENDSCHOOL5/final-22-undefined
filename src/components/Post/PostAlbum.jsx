import React, { forwardRef } from 'react';
import * as S from './PostAlbum.style';
import Wrapper from '../common/Wrapper/Wrapper';

const PostAlbum = forwardRef(({ posts }, ref) => {
  return (
    <S.Container>
      <Wrapper>
        <S.List>
          {posts.map((post, index) =>
            post.image ? (
              post.image.includes(',') ? (
                <S.Item key={post.id} ref={index === posts.length - 1 ? ref : null} multi>
                  <S.Img src={post.image.split(',')[0]} alt='대표 이미지' />
                </S.Item>
              ) : (
                <S.Item key={post.id} ref={index === posts.length - 1 ? ref : null}>
                  <S.Img src={post.image} alt='대표 이미지' />
                </S.Item>
              )
            ) : null,
          )}
        </S.List>
      </Wrapper>
    </S.Container>
  );
});

export default PostAlbum;
