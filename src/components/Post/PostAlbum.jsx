import React from 'react';
import Cat from '../../assets/upload-file.png';
import Orange from '../../assets/post-img-example.png';
import * as S from './PostAlbum.style';

const PostAlbum = () => {
  return (
    <S.Container>
      <S.List>
        <S.Item>
          <S.Img src={Cat} />
        </S.Item>
        <S.Item>
          <S.Img src={Orange} />
        </S.Item>
        <S.Item>
          <S.Img src={Orange} />
        </S.Item>
        <S.Item>
          <S.Img src={Orange} />
        </S.Item>
        <S.Item>
          <S.Img src={Orange} />
        </S.Item>
        <S.Item>
          <S.Img src={Orange} />
        </S.Item>
        <S.Item>
          <S.Img src={Orange} />
        </S.Item>
        <S.Item>
          <S.Img src={Orange} />
        </S.Item>
      </S.List>
    </S.Container>
  );
};

export default PostAlbum;
