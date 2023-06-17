import React from 'react';
import * as S from './SellingProduct.style';
import ProductSkeleton from '../Skeleton/ProductSkeleton';

const SellingProduct = ({ isLoading, products }) => {
  return (
    <S.Section>
      <S.Title>판매 중인 상품</S.Title>
      <S.List>
        {isLoading ? (
          <>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </>
        ) : (
          products.map((product) => (
            <S.Item key={product.id}>
              <S.ImgCover>
                <S.Img src={product.itemImage} />
              </S.ImgCover>
              <S.Name className='s1-ellipsis'>{product.itemName}</S.Name>
              <S.Price className='s1-ellipsis'>{`${product.price.toLocaleString()}원`}</S.Price>
            </S.Item>
          ))
        )}
      </S.List>
    </S.Section>
  );
};

export default SellingProduct;
