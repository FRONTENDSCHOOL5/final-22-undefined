import PostUserProfileImg from './PostUserProfileImg';
import styled from 'styled-components';
import HeartIcon from '../../assets/icon/icon-heart.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';

const PostItem = ({ userProfileImg, userName, acountName, postContent, postImg, today }) => {
  console.log(postImg);
  return (
    <>
      <PostArticle>
        <h3 className='a11y-hidden'>게시물 아이템</h3>
        <UserInfoSect>
          <h4 className='a11y-hidden'>게시물 유저 정보</h4>
          <PostUserProfileImg userProfileImg={userProfileImg} />
          <UserNameInfo>
            <InfoName>{userName}</InfoName>
            <InfoAccount>@ {acountName}</InfoAccount>
          </UserNameInfo>
          <More>more</More>
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
            <CommentLink href='#'>
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

const More = styled.button`
  /* position: absolute; */
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
