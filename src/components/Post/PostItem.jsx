import PostUserProfileImg from './PostUserProfileImg';
import styled from 'styled-components';
import HeartIcon from '../../assets/icon/icon-heart.png';
import HeartIconFill from '../../assets/icon/icon-heart-active.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';
import ModalButtonImg from '../../assets/icon/icon-more-vertical.png';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContextStore } from '../../context/AuthContext';

const PostItem = ({ post, itemPostId, onClick, upDatedCommentCount }) => {
  const [isHearted, setIsHearted] = useState(post.hearted);
  const [heartCount, setHeartCount] = useState(post.heartCount);
  const [commentCount, setCommentCount] = useState(post.commentCount);
  const { userToken } = useContext(AuthContextStore);
  const Date = post.createdAt.substring(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/, '$1년 $2월 $3일');

  // 좋아요 요청
  const handleLike = async () => {
    try {
      if (!isHearted) {
        const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${itemPostId}/heart`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${userToken}`, 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        console.log(data);
        const addCount = data.post.heartCount;
        setIsHearted(true);
        setHeartCount(addCount);
      } else {
        const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${itemPostId}/unheart`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${userToken}`, 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        const delCount = data.post.heartCount;
        setIsHearted(false);
        setHeartCount(delCount);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <PostArticle>
        <h3 className='a11y-hidden'>게시물 아이템</h3>
        <UserInfoSect>
          <h4 className='a11y-hidden'>게시물 유저 정보</h4>
          <PostUserProfileImg userProfileImg={post.author.image} />
          <UserNameInfo>
            <InfoName>{post.author.username}</InfoName>
            <InfoAccount>@ {post.author.accountname}</InfoAccount>
          </UserNameInfo>
          <ButtonIcon onClick={onClick}>
            <img src={ModalButtonImg} alt='숨겨진 모달창 나타내기' />
          </ButtonIcon>
        </UserInfoSect>

        <UserContentSect>
          <h4 className='a11y-hidden'>게시물 내용</h4>
          <UserPostText>{post?.content}</UserPostText>
          {post?.image && <UserPostImg src={post?.image} />}
          <LikeAndComment>
            <LikeBtn isHearted={isHearted} onClick={handleLike}>
              <span className='a11y-hidden'>좋아요 버튼</span>
              <span>{heartCount}</span>
            </LikeBtn>
            <CommentLink to={`/postdetail/${itemPostId}`} state={{ post: post }}>
              <span className='a11y-hidden'>댓글 남기기 링크</span>
              <span>{commentCount}</span>
            </CommentLink>
          </LikeAndComment>
          <TodayDate>{Date}</TodayDate>
        </UserContentSect>
      </PostArticle>
    </>
  );
};

export default PostItem;

const PostArticle = styled.article`
  position: relative;
`;

const UserInfoSect = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const UserNameInfo = styled.div`
  flex-grow: 1;
`;
const ProfileLink = styled(Link)``;
const NameLink = styled(Link)``;

const InfoName = styled.p`
  margin: 4px 0;
`;
const InfoAccount = styled.p`
  font-size: 12px;
`;

// 모달 버튼 아이콘
const ButtonIcon = styled.button`
  position: absolute;
  /* gap: 12px; */
  top: 3px;
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
    background: ${({ isHearted }) => `url(${isHearted ? HeartIconFill : HeartIcon}) no-repeat center`};
  }
`;

const CommentLink = styled(Link)`
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
