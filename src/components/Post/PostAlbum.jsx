import React from 'react';
import * as S from './PostAlbum.style';
import Wrapper from '../common/Wrapper/Wrapper';
import { Link } from 'react-router-dom';

const PostAlbum = ({ posts }) => {
  return (
    <S.Container>
      <Wrapper>
        <S.List>
          {posts.map((post) =>
            post.image ? (
              post.image.includes(',') ? (
                <Link to={`/postdetail/${post.id}`} key={post.id}>
                  <S.Item multi>
                    <S.Img src={post.image.split(',')[0]} alt='대표 이미지' />
                  </S.Item>
                </Link>
              ) : (
                <Link to={`/postdetail/${post.id}`} key={post.id}>
                  <S.Item>
                    <S.Img src={post.image} alt='대표 이미지' />
                  </S.Item>
                </Link>
              )
            ) : null,
          )}
        </S.List>
      </Wrapper>
    </S.Container>
  );
};

export default PostAlbum;
