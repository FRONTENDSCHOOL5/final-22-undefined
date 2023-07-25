import React, { useContext, useEffect, useState } from 'react';
import * as S from './SellingProduct.style';
import ProductSkeleton from '../Skeleton/ProductSkeleton';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import Wrapper from '../common/Wrapper/Wrapper';
import ProductModal from '../common/Modal/ProductModal';
import { getProducts } from '../../api/product';

const SellingProduct = () => {
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productLink, setProductLink] = useState('');

  const userId = accountname ? accountname : userAccountname;

  console.log(products);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await getProducts(userId, userToken);
        setProducts(data.product);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    fetch();
  }, [userToken, userId]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    if (selectedProduct) {
      openModal();
      setProductId(productId);
      setProductLink(selectedProduct.link); // 새로운 상태로 저장
    }
  };

  return (
    <S.Section>
      <Wrapper>
        <S.Title>등록된 상품</S.Title>
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
        {isModalOpen && (
          <ProductModal
            onClose={closeModal}
            productId={productId}
            products={products}
            setProducts={setProducts}
            formData={{ link: encodeURIComponent(productLink) }}
          />
        )}
      </Wrapper>
    </S.Section>
  );
};

export default SellingProduct;
