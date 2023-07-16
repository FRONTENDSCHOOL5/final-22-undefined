import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileDisplay from '../../components/Profile/ProfileDisplay';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import SellingProduct from '../../components/Product/SellingProduct';
import PostSection from '../../components/Post/PostSection';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';
import FeedHeader from '../../components/common/Header/FeedHeader';
import { getUserInfo } from '../../api/profile';

const Title = styled.h1``;

const Main = styled.main`
  margin-top: 48px;
  background-color: ${({ theme }) => theme.colors.bgGray};
`;

const ProfilePage = () => {
  const { accountname } = useParams();
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  // 현재 프로필의 accountname
  const userId = accountname ? accountname : userAccountname;
  // 현재 프로필에 해당하는 사람이 로그인된 유저랑 같은 사람인지 여부
  const isLoginUser = userId === userAccountname;

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await getUserInfo(userId, userToken);
        if (data.message === '해당 계정이 존재하지 않습니다.') navigate('/profile');
        else setUserInfo(data.profile);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };

    fetch();
  }, [userId]);

  return (
    <>
      <Title className='a11y-hidden'>{isLoginUser ? '나의 프로필 페이지' : 'OO의 프로필 페이지'}</Title>
      <FeedHeader />
      <Main>
        <ProfileDisplay userInfo={userInfo} isLoading={isLoading} setUserInfo={setUserInfo} />
        <SellingProduct />
        {!isLoading && <PostSection />}
      </Main>
      <TabMenu active={isLoginUser ? '4' : '0'} />
    </>
  );
};

export default ProfilePage;
