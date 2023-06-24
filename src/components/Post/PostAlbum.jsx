import React from 'react';
import * as S from './PostAlbum.style';
import Wrapper from '../common/Wrapper/Wrapper';

const PostAlbum = ({ posts }) => {
  return (
    <S.Container>
      <Wrapper>
        <S.List>
          {posts.map((post) =>
            post.image ? (
              post.image.includes(',') ? (
                <S.Item key={post.id} multi>
                  <S.Img src={post.image.split(',')[0]} alt='대표 이미지' />
                </S.Item>
              ) : (
                <S.Item key={post.id}>
                  <S.Img src={post.image} alt='대표 이미지' />
                </S.Item>
              )
            ) : null,
          )}
        </S.List>
      </Wrapper>
    </S.Container>
  );
};

export default PostAlbum;
