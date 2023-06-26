import { useContext, useState, useEffect } from 'react';
import { AuthContextStore } from '../../context/AuthContext';

import TopMainNav from '../../components/common/Header/TopMainNav';
import Contents from './Contents';
import TabMenu from '../../components/common/TabMenu/TabMenu';

const Home = () => {
  const { userToken } = useContext(AuthContextStore);
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

  return (
    <>
      <TopMainNav />
      <>
        {isLoading ? (
          <div style={{ background: 'white', width: '50vw', height: '50vh' }}></div>
        ) : (
          <Contents posts={posts} />
        )}
      </>
      <TabMenu active={'0'} />
    </>
  );
};

export default Home;
