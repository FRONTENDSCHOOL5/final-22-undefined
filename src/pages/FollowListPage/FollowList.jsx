import React, { useState } from 'react';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import FollowListHeader from '../../components/common/Header/FollowListHeader';
import { useParams } from 'react-router-dom';

const FollowList = () => {
  const { accountname, type } = useParams();
  const [followList, setFollowList] = useState([]);

  return (
    <Wrapper>
      <FollowListHeader type={type === 'follower' ? 'Followers' : 'Followings'} />
    </Wrapper>
  );
};

export default FollowList;
