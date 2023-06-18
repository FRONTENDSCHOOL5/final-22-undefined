import React from 'react';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import TopSearchNav from './TopSearchNav';
import Contents from './Contents';
import TabMenu from '../HomePage/TabMenu';

const Search = () => {
  return (
    <Wrapper>
      <TopSearchNav />
      <Contents />
      <TabMenu />
    </Wrapper>
  );
};

export default Search;
