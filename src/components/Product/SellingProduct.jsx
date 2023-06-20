import React, { useContext, useEffect, useState } from 'react';
import * as S from './SellingProduct.style';
import ProductSkeleton from '../Skeleton/ProductSkeleton';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import Wrapper from '../common/Wrapper/Wrapper';

const SellingProduct = ({ onClick, setProductId }) => {
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const userId = accountname ? accountname : JSON.parse(userAccountname);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.mandarin.weniv.co.kr/product/${userId}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`,
            'Content-type': 'application/json',
          },
        });

        const jsonData = await response.json();
        setProducts(jsonData.product);

        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    getProducts();
  }, [userToken, userId]);

  const handleClick = (productId) => {
    onClick();
    console.log(productId);
    setProductId(productId);
  };

  return (
    <S.Section>
      <Wrapper>
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
                <S.ImgCover onClick={() => handleClick(product.id)}>
                  <S.Img src={product.itemImage} />
                </S.ImgCover>
                <S.Name className='s1-ellipsis'>{product.itemName}</S.Name>
                <S.Price className='s1-ellipsis'>{`${product.price.toLocaleString()}원`}</S.Price>
              </S.Item>
            ))
          )}
        </S.List>
        {products.length === 0 && !isLoading && <S.Soldout>판매중인 상품이 없습니다.😅</S.Soldout>}
      </Wrapper>
    </S.Section>
  );
};

export default SellingProduct;
