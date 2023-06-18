import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import FollowListHeader from '../../components/common/Header/FollowListHeader';

const FollowList = () => {
  return (
    <Wrapper>
      <FollowListHeader type='Followers' />
    </Wrapper>
  );
};

export default FollowList;
