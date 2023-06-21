import React, { useContext, useEffect, useState } from 'react';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import FollowListHeader from '../../components/common/Header/FollowListHeader';
import { useParams } from 'react-router-dom';
import Follows from '../../components/Follow/Follows';
import styled from 'styled-components';
import { AuthContextStore } from '../../context/AuthContext';

const Main = styled.main`
  margin-top: 48px;
  padding: 24px 16px;
  overflow: auto;
`;

const FollowList = () => {
  const { accountname, type } = useParams();
  const { userToken } = useContext(AuthContextStore);
  const [followList, setFollowList] = useState([]);

  useEffect(() => {
    const getFollowList = async () => {
      try {
        const response = await fetch(`https://api.mandarin.weniv.co.kr/profile/${accountname}/${type}`, {
          headers: { Authorization: `Bearer ${JSON.parse(userToken)}`, 'Content-type': 'application/json' },
        });

        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getFollowList();
  }, []);

  return (
    <Main>
      <FollowListHeader type={type === 'follower' ? 'Followers' : 'Followings'} />
      <Wrapper>
        <Follows followList={followList} />
      </Wrapper>
    </Main>
  );
};

export default FollowList;
