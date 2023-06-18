import styled from 'styled-components';
import layers from '../../assets/icon/iccon-img-layers.svg';

export const Container = styled.div`
  padding: 16px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const Item = styled.li`
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

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;
