import { useContext, useState, useEffect } from 'react';
import { AuthContextStore } from '../../context/AuthContext';

import TopMainNav from '../../components/common/Header/TopMainNav';
import Contents from './Contents';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import { getFeeds } from '../../api/post';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Home = () => {
  const { userToken } = useContext(AuthContextStore);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { target, skip, markAsLast } = useIntersectionObserver(posts);

  const handlePostList = async () => {
    try {
      const data = await getFeeds(skip, userToken);
      console.log(data);
      if (data.posts.length < 6) markAsLast();
      setPosts((prev) => [...prev, ...data.posts]);
      setIsLoading(false);
    } catch (error) {
      console.error('실패:', error);
    }
  };

  useEffect(() => {
    if (userToken) {
      handlePostList();
    }
  }, [userToken, skip]);

  return (
    <>
      <TopMainNav />
      <>
        {isLoading ? (
          <div style={{ background: 'white', width: '50vw', height: '50vh' }}></div>
        ) : (
          <Contents posts={posts} ref={target} />
        )}
      </>
      <TabMenu active={'0'} />
    </>
  );
};

export default Home;
