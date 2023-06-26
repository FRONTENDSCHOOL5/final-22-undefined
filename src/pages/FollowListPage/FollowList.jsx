import React, { useContext, useEffect, useState } from 'react';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import FollowListHeader from '../../components/common/Header/FollowListHeader';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContextStore } from '../../context/AuthContext';
import Follow from '../../components/Follow/Follow';
import { getFollowList } from '../../api/follow';

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
    const fetch = async () => {
      try {
        const data = await getFollowList(accountname, type, userToken);
        setFollowList(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetch();
  }, []);

  return (
    <Main>
      <FollowListHeader type={type === 'follower' ? 'Followers' : 'Followings'} />
      <Wrapper>
        <ul>
          {followList.map((item) => (
            <Follow key={item._id} item={item} />
          ))}
        </ul>
      </Wrapper>
    </Main>
  );
};

export default FollowList;
