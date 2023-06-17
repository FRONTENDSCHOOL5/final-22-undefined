import React from 'react';
import styled from 'styled-components';
import Orange from '../../assets/product-img-example.png';
import JejuOrange from '../../assets/basic-profile-img.png';
import ProductSkeleton from '../Skeleton/ProductSkeleton';

const Section = styled.section`
  padding: 20px 0px 20px 21px;
  margin-top: 6px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h2`
  font-weight: 16px;
  font-size: 16px;
`;

const List = styled.ul`
  margin-top: 16px;
  display: flex;
  gap: 10px;
  overflow-y: auto;
`;

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
  border: ${({ theme }) => `0.5px solid ${theme.colors.gray}`};
  margin-bottom: 6px;
  overflow: hidden;
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Name = styled.strong`
  font-size: 14px;
  font-weight: 400;
  display: block;
  margin-bottom: 4px;
`;

const Price = styled.strong`
  font-size: 12px;
  display: block;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

const SellingProduct = () => {
  return (
    <Section>
      <Title>판매 중인 상품</Title>
      <List>
        <Item>
          <ImgCover>
            <Img src={Orange} alt='애월읍 노지 감귤' />
          </ImgCover>
          <Name className='sl-ellipsis'>애월읍 노지 감귤 애월읍 노지 감귤 애월읍 노지 감귤 애월읍 노지 감귤</Name>
          <Price className='sl-ellipsis'>35,000원</Price>
        </Item>
        <Item>
          <ImgCover>
            <Img src={JejuOrange} alt='애월읍 노지 감귤' />
          </ImgCover>
          <Name className='sl-ellipsis'>애월읍 노지 감귤</Name>
          <Price className='sl-ellipsis'>999,999,999,100,999,999,999원</Price>
        </Item>
        <Item>
          <ImgCover>
            <Img src={JejuOrange} alt='애월읍 노지 감귤' />
          </ImgCover>
          <Name className='sl-ellipsis'>애월읍 노지 감귤</Name>
          <Price className='sl-ellipsis'>35,000원</Price>
        </Item>
        <Item>
          <ImgCover>
            <Img src={JejuOrange} alt='애월읍 노지 감귤' />
          </ImgCover>
          <Name className='sl-ellipsis'>애월읍 노지 감귤</Name>
          <Price className='sl-ellipsis'>35,000원</Price>
        </Item>
        <Item>
          <ImgCover>
            <Img src={JejuOrange} alt='애월읍 노지 감귤' />
          </ImgCover>
          <Name className='sl-ellipsis'>애월읍 노지 감귤</Name>
          <Price className='sl-ellipsis'>35,000원</Price>
        </Item>
      </List>
    </Section>
  );
};

export default SellingProduct;
