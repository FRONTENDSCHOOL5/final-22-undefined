import React, { useContext, useEffect, useState } from 'react';
import PostItem from './PostItem';
import styled from 'styled-components';
import { AuthContextStore } from '../../context/AuthContext';

const PostList = () => {
  const [userProfileImg, setUserProfileImg] = useState('');
  const [userName, setUserName] = useState('');
  const [postList, setPostList] = useState([]);
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const ParsedAccountName = JSON.parse(userAccountname);

  // 유저 프로필 요청
  useEffect(() => {
    const getMyImg = async () => {
      try {
        const res = await fetch(`https://api.mandarin.weniv.co.kr/profile/${ParsedAccountName}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`,
            'Content-type': 'application/json',
          },
        });
        const data = await res.json();
        console.log(data);
        setUserProfileImg(data.profile.image);
        setUserName(data.profile.username);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMyImg();
  }, []);

  // 게시글 목록 불러오기
  useEffect(() => {
    const getMyContent = async () => {
      try {
        const res = await fetch(`https://api.mandarin.weniv.co.kr/post/${ParsedAccountName}/userpost`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`,
            'Content-type': 'application/json',
          },
        });
        const data = await res.json();
        console.log(data);
        setPostList(data.post);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMyContent();
  }, []);

  let dateString = new Date();
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let today = dateString.toLocaleDateString('ko-KR', options);

  return (
    <>
      <Ul>
        {postList.map((post) => {
          return (
            <Li key={post.id}>
              <PostItem
                userProfileImg={userProfileImg}
                userName={userName}
                acountName={ParsedAccountName}
                postContent={post.content}
                postImg={post.image}
                today={today}
              />
            </Li>
          );
        })}
      </Ul>
    </>
  );
};

export default PostList;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 16px;
`;

const Li = styled.li``;
