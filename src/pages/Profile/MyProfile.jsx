import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import SaveHeader from '../../components/common/Header/SaveHeader';
import ProfileDisplay from '../../components/Profile/ProfileDisplay';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import SellingProduct from '../../components/Product/SellingProduct';
import PostSection from '../../components/Post/PostSection';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import productList from '../../components/Product/dummyProducts';

const LayoutWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.bgGray};
`;

const Title = styled.h1``;

const Main = styled.main`
  margin-top: 48px;
  overflow-y: auto;
  height: calc(80vh - 111px);
`;

const MyProfile = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { accountname } = useParams();
  const { userToken } = useContext(AuthContextStore);

  useEffect(() => {
    const getProducts = () => {
      try {
        setIsLoading(true);
        // const response = await fetch(`https://api.mandarin.weniv.co.kr/product/${accountname}`, {
        //   headers: {
        //     Authorization: `Bearer ${JSON.parse(userToken)}`,
        //     'Content-type': 'application/json',
        //   },
        // });

        // const jsonData = await response.json();
        // if (jsonData.data !== 0) {
        //   setProducts(jsonData.prouduct);
        // }
        // setIsLoading(false);
        setTimeout(() => {
          setProducts(productList);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    getProducts();
  }, [userToken, accountname]);

  return (
    <LayoutWrapper>
      <Title className='a11y-hidden'>나의 프로필 페이지</Title>
      <SaveHeader name='임시' mode='default' />
      <Main>
        <ProfileDisplay />
        <SellingProduct isLoading={isLoading} products={products} />
        <PostSection />
      </Main>
      <TabMenu active='3' />
    </LayoutWrapper>
  );
};

export default MyProfile;
