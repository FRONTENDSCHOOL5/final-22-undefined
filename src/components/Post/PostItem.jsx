import PostUserProfileImg from './PostUserProfileImg';
import styled from 'styled-components';
import HeartIcon from '../../assets/icon/icon-heart.png';
import HeartIconFill from '../../assets/icon/icon-heart-active.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';
import ModalButtonImg from '../../assets/icon/icon-more-vertical.png';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContextStore } from '../../context/AuthContext';

const PostItem = ({ userInfo, postContent, postImg, itemPostId, onClick }) => {
  const [isHearted, setIsHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [createdDate, setCreatedDate] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const Date = createdDate.substring(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/, '$1년 $2월 $3일');
  console.log(Date);
  // 좋아요, 댓글 갯수 초기 업데이트
  useEffect(() => {
    const fetchInitialCount = async () => {
      try {
        const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${itemPostId}`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${userToken}`, 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        const initialheartCount = data.post.heartCount;
        const initialCommentCount = data.post.commentCount;
        const initialHeartedState = data.post.hearted; //useEffect통해 초기값 판별해서 Hearticon이 차있을지 차있지않을지 값을 정해줌.
        setHeartCount(initialheartCount);
        setCommentCount(initialCommentCount);
        setIsHearted(initialHeartedState);
        setCreatedDate(data.post.createdAt);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchInitialCount();
  }, [itemPostId, userToken]);

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
          <PostUserProfileImg userProfileImg={userInfo?.image} />
          <UserNameInfo>
            <InfoName>{userInfo?.username}</InfoName>
            <InfoAccount>@ {userInfo?.accountname}</InfoAccount>
          </UserNameInfo>
          <ButtonIcon onClick={onClick}>
            <img src={ModalButtonImg} alt='숨겨진 모달창 나타내기' />
          </ButtonIcon>
        </UserInfoSect>

        <UserContentSect>
          <h4 className='a11y-hidden'>게시물 내용</h4>
          <UserPostText>{postContent}</UserPostText>
          {postImg && <UserPostImg src={postImg} />}
          <LikeAndComment>
            <LikeBtn isHearted={isHearted} onClick={handleLike}>
              <span className='a11y-hidden'>좋아요 버튼</span>
              <span>{heartCount}</span>
            </LikeBtn>
            <CommentLink to={`/postdetail/${itemPostId}`}>
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

const PostArticle = styled.article``;

const UserInfoSect = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
`;

const UserNameInfo = styled.div`
  flex-grow: 1;
`;

const InfoName = styled.p`
  margin-bottom: 2px;
`;
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
