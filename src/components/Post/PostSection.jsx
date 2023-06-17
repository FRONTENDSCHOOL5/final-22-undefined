import React from 'react';
import styled, { css } from 'styled-components';
import ListOnIcon from '../../assets/icon/icon-post-list-on.png';
import ListOffIcon from '../../assets/icon/icon-post-list-off.png';
import AlbumOnIcon from '../../assets/icon/icon-post-album-on.png';
import AlbumOffIcon from '../../assets/icon/icon-post-album-off.png';
import PostAlbum from './PostAlbum';

const Section = styled.section`
  margin-top: 6px;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-top: 0.5px solid ${theme.colors.gray};
  `};
`;

const Title = styled.h2``;

const Header = styled.header`
  border-bottom: ${({ theme }) => `0.5px solid ${theme.colors.gray}`};
  padding: 5px 21px 0 0;
  height: 44px;
  text-align: right;
`;

const ListBtn = styled.button`
  width: 25px;
  height: 25px;
  background: url(${ListOnIcon}) no-repeat center;
  margin-right: 22px;
`;

const AlbumBtn = styled.button`
  width: 25px;
  height: 25px;
  background: url(${AlbumOffIcon}) no-repeat center;
`;

const PostSection = () => {
  return (
    <Section>
      <Title className='a11y-hidden'>포스트</Title>
      <Header>
        <ListBtn>
          <span className='a11y-hidden'>리스트로 보기</span>
        </ListBtn>
        <AlbumBtn>
          <span className='a11y-hidden'>리스트로 보기</span>
        </AlbumBtn>
      </Header>
      <PostAlbum />
    </Section>
  );
};

export default PostSection;
