import PostUserProfileImg from './PostUserProfileImg';
import styled from 'styled-components';
import HeartIcon from '../../assets/icon/icon-heart.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a85ea4a (style: a태그를 Link 태그로 변경)
=======
=======
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
import ModalButtonImg from '../../assets/icon/icon-more-vertical.png';
=======
>>>>>>> 761a38c (style: a태그를 Link 태그로 변경)
>>>>>>> 5d3ecb1 (style: a태그를 Link 태그로 변경)
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const PostItem = ({ userInfo, postContent, postImg, today }) => {
=======
import ModalButtonImg from '../../assets/icon/icon-more-vertical.png';

<<<<<<< HEAD
const PostItem = ({ userProfileImg, userName, acountName, postContent, postImg, today, onClick, setPostId }) => {
  console.log(setPostId);
=======
const PostItem = ({ userInfo, postContent, postImg, today, onClick, setPostId }) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e00e158 (style: 코드 오류 수정)
=======
const PostItem = ({ userInfo, postContent, postImg, today, onClick, setPostId }) => {
<<<<<<< HEAD
  console.log(postImg);
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 9a5a8f2 (style: 코드 오류 수정)
=======
=======
import { Link } from 'react-router-dom';

const PostItem = ({ userInfo, postContent, postImg, today }) => {
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
=======
import ModalButtonImg from '../../assets/icon/icon-more-vertical.png';

const PostItem = ({ userProfileImg, userName, acountName, postContent, postImg, today, onClick, setPostId }) => {
  console.log(setPostId);
<<<<<<< HEAD
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
>>>>>>> e00e158 (style: 코드 오류 수정)
=======
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
  const handleClick = () => {
    onClick();
    setPostId();
  };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======

<<<<<<< HEAD
const PostItem = ({ userInfo, postContent, postImg, today }) => {
  console.log(postImg);
>>>>>>> fd2cd79 (fix: 머지 오류 충돌 해결)
=======
const PostItem = ({ userProfileImg, userName, acountName, postContent, postImg, today }) => {
>>>>>>> 56553de (style: 코드 오류 수정)
=======
>>>>>>> a11ca1a (fix: 머지 오류 충돌 해결)
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
=======
=======
>>>>>>> 751c89b (fix: 머지 오류 충돌 해결)
>>>>>>> 749a836 (fix: 머지 오류 충돌 해결)
>>>>>>> b9046a9 (fix: 머지 오류 충돌 해결)
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
