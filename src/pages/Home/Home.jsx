import React from 'react';
import TopMainNav from './TopMainNav';
import Contents from './Contents';
import TabMenu from './TabMenu';

import Wrapper from '../../components/common/Wrapper/Wrapper';

const Home = () => {
  return (
    <Wrapper>
      <TopMainNav />
      <Contents />
      <TabMenu />
    </Wrapper>
  );
};

export default Home;
