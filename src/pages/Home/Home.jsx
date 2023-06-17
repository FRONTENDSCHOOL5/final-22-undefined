import React from 'react';
import TopMainNav from './TopMainNav';
import TabMenu from './TabMenu';

import home from '../../assets/symbol-logo-gray.png';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';

const Main = styled.main`
  text-align: center;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 20px;
  &::before {
    content: '';
    display: block;
    background: url(${home}) no-repeat center/ 100px 100px;
    width: 100px;
    height: 100px;
    margin: 0 auto 25px;
  }
`;

const Btn = styled.button`
  width: 120px;
  height: 44px;
  display: inline-block;
  background: #f26e22;
  border-radius: 44px;
  color: #ffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 17.53px;
  text-align: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <TopMainNav />
      <Main>
        <P>유저를 검색해 팔로우 해보세요!</P>
        <Btn>검색하기</Btn>
      </Main>
      <TabMenu />
    </Wrapper>
  );
};

export default Home;
