import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import ProfileDisplay from '../../components/Profile/ProfileDisplay';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import SellingProduct from '../../components/Product/SellingProduct';
import PostSection from '../../components/Post/PostSection';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import productList from '../../components/Product/dummyProducts';
import FeedHeader from '../../components/common/Header/FeedHeader';

const LayoutWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.bgGray};
`;

const Title = styled.h1``;

const Main = styled.main`
  margin-top: 48px;
  overflow-y: auto;
  height: calc(80vh - 111px);
`;

const ProfilePage = () => {
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);

  // 현재 프로필의 accountname
  const userId = accountname ? accountname : JSON.parse(userAccountname);
  // 현재 프로필에 해당하는 사람이 로그인된 유저랑 같은 사람인지 여부
  const isLoginUser = userId === JSON.parse(userAccountname);

  return (
    <LayoutWrapper>
      <Title className='a11y-hidden'>{isLoginUser ? '나의 프로필 페이지' : 'OO의 프로필 페이지'}</Title>
      <FeedHeader />
      <Main>
        <ProfileDisplay />
        <SellingProduct />
        <PostSection />
      </Main>
      <TabMenu active={isLoginUser ? '3' : '0'} />
    </LayoutWrapper>
  );
};

export default ProfilePage;
