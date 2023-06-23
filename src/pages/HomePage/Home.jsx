import { useContext, useState, useEffect } from 'react';
import TopMainNav from './TopMainNav';
import Contents from './Contents';
import TabMenu from './TabMenu';

import { AuthContextStore } from '../../context/AuthContext';

const Home = () => {
  const { userToken } = useContext(AuthContextStore);
  const [post, setPost] = useState([]);

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
        // let getPost = {
        //   id: data.posts[0].id,
        //   userName: data.posts[0].author.username,
        //   accountName: data.posts[0].author.accountname,
        //   content: data.posts[0].content,
        //   image: data.posts[0].image,
        // };
        // console.log(getPost);
        console.log(data.posts);
        setPost(data.posts);
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
      <Contents post={post} />
      <TabMenu />
    </>
  );
};

export default Home;
