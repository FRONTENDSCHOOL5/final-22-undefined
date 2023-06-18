import React from 'react';
import styled from 'styled-components';
import loadingAnimation from './LoadingAnimation.style';

const Item = styled.li`
  width: 140px;
  flex-shrink: 0;

  &:last-child {
    margin-right: 21px;
  }
`;

const ImgCover = styled.div`
  height: 90px;
  border-radius: 8px;
  margin-bottom: 6px;
  overflow: hidden;

  ${loadingAnimation};
`;

const Name = styled.div`
  margin-bottom: 4px;
  border-radius: 8px;
  width: 100px;
  height: 15px;

  ${loadingAnimation};
`;

const Price = styled.div`
  margin-bottom: 15px;
  border-radius: 8px;
  width: 40px;
  height: 15px;

  ${loadingAnimation};
`;

const ProductSkeleton = () => {
  return (
    <Item>
      <ImgCover />
      <Name />
      <Price />
    </Item>
  );
};

export default ProductSkeleton;
