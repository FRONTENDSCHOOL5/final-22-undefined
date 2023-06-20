import React, { useContext, useEffect, useState } from 'react';
import * as S from './SellingProduct.style';
import ProductSkeleton from '../Skeleton/ProductSkeleton';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import Wrapper from '../common/Wrapper/Wrapper';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 506c3a9 (style: 코드 오류 수정)
=======
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 8b24b9c (style: 코드 오류 수정)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 437936b (style: 코드 오류 수정)
=======
>>>>>>> 3dfcb90 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> d03f78f (style: 코드 오류 수정)
=======
=======
>>>>>>> 158c390 (fix: 머지 오류 충돌 해결)
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 158c390 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 0da4e19 (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> a13348b (style: 코드 오류 수정)
=======
=======
>>>>>>> e5aebaa (fix: 머지 오류 충돌 해결)
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
const SellingProduct = ({ onClick, setProductId }) => {
=======
const SellingProduct = ({ onClick }) => {
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> a13348b (style: 코드 오류 수정)
=======
const SellingProduct = ({ onClick, setProductId }) => {
>>>>>>> 6c1e3b9 (style: 코드 오류 수정)
=======
const SellingProduct = () => {
>>>>>>> d47bdef (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
=======
const SellingProduct = ({ onClick }) => {
>>>>>>> 0b99f89 (style: 코드 오류 수정)
=======
const SellingProduct = ({ onClick, setProductId }) => {
>>>>>>> 5b505c9 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
=======
const SellingProduct = () => {
>>>>>>> 699f2ea (style: 코드 오류 수정)
=======
const SellingProduct = ({ onClick }) => {
<<<<<<< HEAD
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
const SellingProduct = ({ onClick, setProductId }) => {
>>>>>>> e00e158 (style: 코드 오류 수정)
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
=======
const SellingProduct = ({ onClick, setProductId }) => {
>>>>>>> 6c1e3b9 (style: 코드 오류 수정)
>>>>>>> 506c3a9 (style: 코드 오류 수정)
=======
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
=======
const SellingProduct = ({ onClick }) => {
>>>>>>> 0b99f89 (style: 코드 오류 수정)
>>>>>>> 8b24b9c (style: 코드 오류 수정)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
=======
=======
const SellingProduct = () => {
>>>>>>> 699f2ea (style: 코드 오류 수정)
>>>>>>> 437936b (style: 코드 오류 수정)
=======
>>>>>>> f32b37f (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 3dfcb90 (fix: 머지 오류 충돌 해결)
=======
=======
const SellingProduct = ({ onClick, setProductId }) => {
>>>>>>> 71b2134 (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> d03f78f (style: 코드 오류 수정)
=======
=======
>>>>>>> 158c390 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
=======
=======
const SellingProduct = ({ onClick, setProductId }) => {
>>>>>>> 6c1e3b9 (style: 코드 오류 수정)
>>>>>>> 0da4e19 (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> a13348b (style: 코드 오류 수정)
=======
=======
>>>>>>> e5aebaa (fix: 머지 오류 충돌 해결)
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
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
                <S.ImgCover>
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
=======
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 403c34a (style: 코드 오류 수정)
=======
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 6d91338 (style: 코드 오류 수정)
=======
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 8b24b9c (style: 코드 오류 수정)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 437936b (style: 코드 오류 수정)
=======
>>>>>>> 3dfcb90 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> d03f78f (style: 코드 오류 수정)
=======
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> a13348b (style: 코드 오류 수정)
=======
=======
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
              <S.ImgCover onClick={() => handleClick(product.id)}>
=======
              <S.ImgCover>
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
=======
              <S.ImgCover onClick={onClick}>
>>>>>>> 56553de (style: 코드 오류 수정)
=======
              <S.ImgCover onClick={() => handleClick(product.id)}>
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <S.ImgCover>
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
=======
              <S.ImgCover onClick={onClick}>
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <S.ImgCover onClick={() => handleClick(product.id)}>
>>>>>>> e00e158 (style: 코드 오류 수정)
=======
              <S.ImgCover onClick={onClick}>
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
=======
              <S.ImgCover onClick={() => handleClick(product.id)}>
>>>>>>> 6ce78d2 (style: 코드 오류 수정)
=======
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
=======
=======
              <S.ImgCover onClick={onClick}>
>>>>>>> 56553de (style: 코드 오류 수정)
>>>>>>> 403c34a (style: 코드 오류 수정)
=======
>>>>>>> 88327f8 (fix: 머지 오류 충돌 해결)
=======
=======
              <S.ImgCover>
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
>>>>>>> 6d91338 (style: 코드 오류 수정)
=======
              <S.ImgCover onClick={onClick}>
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
              <S.ImgCover onClick={() => handleClick(product.id)}>
>>>>>>> e00e158 (style: 코드 오류 수정)
=======
              <S.ImgCover onClick={onClick}>
<<<<<<< HEAD
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
              <S.ImgCover onClick={() => handleClick(product.id)}>
>>>>>>> 506c3a9 (style: 코드 오류 수정)
=======
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
=======
              <S.ImgCover onClick={onClick}>
>>>>>>> 56553de (style: 코드 오류 수정)
>>>>>>> 8b24b9c (style: 코드 오류 수정)
=======
>>>>>>> 6d33120 (fix: 머지 오류 충돌 해결)
=======
=======
              <S.ImgCover>
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
>>>>>>> 437936b (style: 코드 오류 수정)
=======
>>>>>>> 3dfcb90 (fix: 머지 오류 충돌 해결)
=======
=======
              <S.ImgCover onClick={() => handleClick(product.id)}>
>>>>>>> e00e158 (style: 코드 오류 수정)
>>>>>>> d03f78f (style: 코드 오류 수정)
=======
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
              <S.ImgCover onClick={() => handleClick(product.id)}>
>>>>>>> 6ce78d2 (style: 코드 오류 수정)
<<<<<<< HEAD
>>>>>>> a13348b (style: 코드 오류 수정)
=======
=======
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
                <S.Img src={product.itemImage} />
              </S.ImgCover>
              <S.Name className='s1-ellipsis'>{product.itemName}</S.Name>
              <S.Price className='s1-ellipsis'>{`${product.price.toLocaleString()}원`}</S.Price>
            </S.Item>
          ))
        )}
      </S.List>
      {products.length === 0 && !isLoading && <S.Soldout>판매중인 상품이 없습니다.😅</S.Soldout>}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
>>>>>>> 8bcb1cf (fix: 머지 오류 충돌 해결)
<<<<<<< HEAD
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
>>>>>>> c3ddbf8 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
>>>>>>> 31d36ce (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 8905a45 (fix: 머지 오류 충돌 해결)
=======
>>>>>>> b982543 (fix: 머지 오류 충돌 해결)
    </S.Section>
  );
};

export default SellingProduct;
