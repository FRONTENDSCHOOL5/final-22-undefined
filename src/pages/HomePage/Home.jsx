import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';

import TopMainNav from '../../components/common/Header/TopMainNav';
import MainLayout from '../../components/common/MainLayout/MainLayout';
import Contents from './Contents';
import TabMenu from '../../components/common/TabMenu/TabMenu';

const Home = () => {
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handlePostList = async () => {
    try {
      const response = await fetch('https://api.mandarin.weniv.co.kr/post/feed', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setPosts(data.posts);
        setIsLoading(false);
      } else {
        console.error('요청에 실패했습니다.');
      }
    } catch (error) {
      console.error('실패:', error);
    }
  };

  useEffect(() => {
    if (userToken) {
      handlePostList();
    }
  }, [userToken]);

  const { accountname } = useParams();
  const userId = accountname ? accountname : userAccountname;
  // 현재 프로필에 해당하는 사람이 로그인된 유저랑 같은 사람인지 여부
  const isLoginUser = userId === userAccountname;

  return (
    <>
      <TopMainNav />
      <MainLayout>
        {isLoading ? (
          <div style={{ background: 'white', width: '100vw', height: '100vh' }}></div>
        ) : (
          <Contents posts={posts} />
        )}
      </MainLayout>
      <TabMenu active={isLoginUser ? '0' : '1'} />
    </>
  );
};

export default Home;
