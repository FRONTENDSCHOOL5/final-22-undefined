import React, { useContext, useEffect, useState } from 'react';
import PostUserProfileImg from './PostUserProfileImg';
import { AuthContextStore } from '../../context/AuthContext';
import Wrapper from '../common/Wrapper/Wrapper';
import styled from 'styled-components';
import HeartIcon from '../../assets/icon/icon-heart.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';
import ModalButtonImg from '../../assets/icon/icon-more-vertical.png';
import PostModal from '../common/Modal/PostModal';

const PostContent = () => {
  const [postId, setPostId] = useState(''); // postId 상태 추가
  const [myProfileImg, setMyProfileImg] = useState('');
  const [userName, setUserName] = useState('');
  const [myPostContent, setMyPostContent] = useState('');
  const [myPostImg, setMyPostImg] = useState('');
  const [likeCount, setLikeCount] = useState(0);
  const { userToken, userAccountname } = useContext(AuthContextStore);
  console.log(userAccountname);
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
        console.log(data.profile.image);
        setMyProfileImg(data.profile.image);
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
        // console.log(data);
        setMyPostContent(data.post[0].content);
        setMyPostImg(data.post[0].image);
        setPostId(data.post[0].id); // 추가
      } catch (error) {
        console.log(error.message);
      }
    };
    getMyContent();
  }, []);

  const handleLikeBtn = () => {};

  let dateString = new Date();
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let today = dateString.toLocaleDateString('ko-KR', options);
  console.log(today);

  // 게시글 모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Wrapper>
        <PostArticle>
          <h3 className='a11y-hidden'>게시물 아이템</h3>
          <UserInfoSect>
            <h4 className='a11y-hidden'>게시물 유저 정보</h4>
            <PostUserProfileImg userProfileImg={myProfileImg} />
            <UserNameInfo>
              <InfoName>{userName}</InfoName>
              <InfoAccount>{ParsedAccountName}</InfoAccount>
            </UserNameInfo>
            {/* 게시글 모달 */}
            <ButtonIcon onClick={openModal}>
              <img src={ModalButtonImg} alt='숨겨진 모달창 나타내기' />
            </ButtonIcon>
            {isModalOpen && <PostModal onClose={closeModal} postId={postId} />}
          </UserInfoSect>

          <UserContentSect>
            <h4 className='a11y-hidden'>게시물 내용</h4>
            <UserPostText>{myPostContent}</UserPostText>
            {myPostImg !== 'https://api.mandarin.weniv.co.kr/' && <UserPostImg src={myPostImg} />}
            <LikeAndComment>
              <LikeBtn onClick={handleLikeBtn}>
                <span className='a11y-hidden'>좋아요 버튼</span>
                <span>{likeCount}</span>
              </LikeBtn>

              <CommentLink href='#'>
                <span className='a11y-hidden'>댓글 남기기 링크</span>
                <span>0</span>
              </CommentLink>
            </LikeAndComment>
            <TodayDate>{today}</TodayDate>
          </UserContentSect>
        </PostArticle>
      </Wrapper>
    </>
  );
};

export default PostContent;

const PostArticle = styled.article``;

const UserInfoSect = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const UserNameInfo = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
`;

const InfoName = styled.p``;
const InfoAccount = styled.p`
  font-size: 12px;
`;

// 모달 버튼 아이콘
const ButtonIcon = styled.button`
  position: absolute;
  gap: 12px;
  right: 0;
`;

const UserContentSect = styled.section`
  padding-left: 54px;
`;

const UserPostText = styled.p`
  margin-bottom: 16px;
`;

const UserPostImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  overflow: hidden;
  object-fit: cover;
`;

const LikeAndComment = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 16px;
`;

const LikeBtn = styled.button`
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 6px;
    display: inline-block;
    vertical-align: bottom;
    background: url(${HeartIcon}) no-repeat center;
  }
`;

const CommentLink = styled.a`
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 6px;
    display: inline-block;
    vertical-align: bottom;
    background: url(${CommentIcon}) no-repeat center;
  }
`;

const TodayDate = styled.p`
  font-size: 10px;
`;
