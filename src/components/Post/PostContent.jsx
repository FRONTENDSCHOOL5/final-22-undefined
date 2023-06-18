import React, { useContext, useEffect, useState } from 'react';
import PostUserProfileImg from './PostUserProfileImg';
import { AuthContextStore } from '../../context/AuthContext';
import Wrapper from '../common/Wrapper/Wrapper';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PostContent = () => {
  const [myProfileImg, setMyProfileImg] = useState('');
  const [myPostImg, setMyPostImg] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const { accountname } = useParams();

  // 유저 프로필 이미지 요청
  useEffect(() => {
    const getMyImg = async () => {
      try {
        const res = await fetch('https://api.mandarin.weniv.co.kr/user/myinfo', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`,
          },
        });
        const data = await res.json();
        console.log(data.user.image);
        setMyProfileImg(data.user.image);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMyImg();
  }, []);

  // 나의 게시글 목록 불러오기
  useEffect(() => {
    const getMyContent = async () => {
      try {
        const res = await fetch(`https://api.mandarin.weniv.co.kr/post/${accountname}/userpost`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${JSON.parse(userToken)}`,
            'Content-type': 'application/json',
          },
        });
        const data = await res.json();
        console.log(data);
        console.log(data.post[0].image);
        setMyPostImg(data.post[0].image);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMyContent();
  }, []);

  let dateString = new Date();
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let today = dateString.toLocaleDateString('ko-KR', options);
  console.log(today);

  return (
    <>
      <Wrapper>
        <PostArticle>
          <h3 className='a11y-hidden'>게시물 아이템</h3>

          <section>
            <h4 className='a11y-hidden'>게시물 유저 정보</h4>
            <PostUserProfileImg userProfileImg={myProfileImg} />
            <div>
              <strong>username</strong>
              <p>accountname</p>
            </div>
          </section>

          <section>
            <h4 className='a11y-hidden'>게시물 내용</h4>
            {myPostImg !== 'https://api.mandarin.weniv.co.kr/' && <img src={myPostImg} />}
          </section>

          <section>
            <h4 className='a11y-hidden'>게시물 기타사항</h4>
            <div>
              <p>좋아요</p>
              <p>댓글</p>
            </div>
            <p>{today}</p>
          </section>
        </PostArticle>
      </Wrapper>
    </>
  );
};

export default PostContent;

const PostArticle = styled.article``;
