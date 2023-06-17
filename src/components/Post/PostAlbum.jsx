import React from 'react';
import styled from 'styled-components';
import Cat from '../../assets/upload-file.png';
import Orange from '../../assets/post-img-example.png';
import layers from '../../assets/icon/iccon-img-layers.svg';

const Container = styled.div`
  padding: 16px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const Item = styled.li`
  height: 114px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    right: 10px;
    width: 15px;
    height: 15px;
    background: url(${layers}) no-repeat center;
  }
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;

const PostAlbum = () => {
  return (
    <Container>
      <List>
        <Item>
          <Img src={Cat} />
        </Item>
        <Item>
          <Img src={Orange} />
        </Item>
        <Item>
          <Img src={Orange} />
        </Item>
        <Item>
          <Img src={Orange} />
        </Item>
        <Item>
          <Img src={Orange} />
        </Item>
        <Item>
          <Img src={Orange} />
        </Item>
        <Item>
          <Img src={Orange} />
        </Item>
      </List>
    </Container>
  );
};

export default PostAlbum;
