import React from 'react';
import TopMainNav from './TopMainNav';
import TabMenu from './TabMenu';
import SearchBtn from './SearchBtn';

import home from '../../assets/symbol-logo-gray.png';
import styled from 'styled-components';

const Wrap = styled.div`
  text-align: center;
`;
const IMG = styled.img`
  width: 100px;
  height: 100px;
`;
const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
`;

const Section = styled.section`
  max-width: 390px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <Section>
      <TopMainNav />
      <Wrap>
        <IMG src={home} alt='동그란 말풍선 머리에 귤 꼭지가 붙어있는 감귤 캐릭터' />
        <p>유저를 검색해 팔로우 해보세요!</p>
      </Wrap>
      <SearchBtn />
      <TabMenu />
    </Section>
  );
};

export default Home;
