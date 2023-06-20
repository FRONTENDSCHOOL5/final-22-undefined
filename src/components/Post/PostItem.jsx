import PostUserProfileImg from './PostUserProfileImg';
import styled from 'styled-components';
import HeartIcon from '../../assets/icon/icon-heart.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const PostItem = ({ userInfo, postContent, postImg, today }) => {
=======
import ModalButtonImg from '../../assets/icon/icon-more-vertical.png';

const PostItem = ({ userProfileImg, userName, acountName, postContent, postImg, today, onClick, setPostId }) => {
  console.log(setPostId);
  const handleClick = () => {
    onClick();
    setPostId();
  };
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
  return (
    <>
      <PostArticle>
        <h3 className='a11y-hidden'>게시물 아이템</h3>
        <UserInfoSect>
          <h4 className='a11y-hidden'>게시물 유저 정보</h4>
          <PostUserProfileImg userProfileImg={userInfo.image} />
          <UserNameInfo>
            <InfoName>{userInfo.username}</InfoName>
            <InfoAccount>@ {userInfo.accountname}</InfoAccount>
          </UserNameInfo>
          <ButtonIcon onClick={handleClick}>
            <img src={ModalButtonImg} alt='숨겨진 모달창 나타내기' />
          </ButtonIcon>
        </UserInfoSect>

        <UserContentSect>
          <h4 className='a11y-hidden'>게시물 내용</h4>
          <UserPostText>{postContent}</UserPostText>
          {postImg && <UserPostImg src={postImg} />}
          <LikeAndComment>
            <LikeBtn>
              <span className='a11y-hidden'>좋아요 버튼</span>
              <span>0</span>
            </LikeBtn>
            <CommentLink to='/#'>
              <span className='a11y-hidden'>댓글 남기기 링크</span>
              <span>0</span>
            </CommentLink>
          </LikeAndComment>
          <TodayDate>{today}</TodayDate>
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
    background: url(${HeartIcon}) no-repeat center;
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
