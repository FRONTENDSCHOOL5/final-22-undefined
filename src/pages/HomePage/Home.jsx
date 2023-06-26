import { useContext, useState, useEffect } from 'react';
import { AuthContextStore } from '../../context/AuthContext';

import TopMainNav from '../../components/common/Header/TopMainNav';
import MainLayout from '../../components/common/MainLayout/MainLayout';
import Contents from './Contents';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import { getFeeds } from '../../api/post';

const Home = () => {
  const { userToken } = useContext(AuthContextStore);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handlePostList = async () => {
    try {
      const data = await getFeeds(userToken);
      setPosts(data.posts);
      setIsLoading(false);
    } catch (error) {
      console.error('실패:', error);
    }
  };

  useEffect(() => {
    if (userToken) {
      handlePostList();
    }
  }, [userToken]);

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
      <TabMenu active={'0'} />
    </>
  );
};

export default Home;
