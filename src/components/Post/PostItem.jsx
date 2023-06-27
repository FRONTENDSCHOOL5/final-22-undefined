import PostUserProfileImg from './PostUserProfileImg';
import ModalButtonImg from '../../assets/icon/icon- more-vertical.svg';
import { useContext, useState } from 'react';
import { AuthContextStore } from '../../context/AuthContext';
import Carousel from '../common/Carousel/Carousel';
import * as S from './PostItem.style';
import { useLocation } from 'react-router-dom';
import { likePost } from '../../api/post';

const PostItem = ({ post, onClick, commentCnt }) => {
  const [isHearted, setIsHearted] = useState(post.hearted);
  const [heartCount, setHeartCount] = useState(post.heartCount);
  const { userToken } = useContext(AuthContextStore);
  const Date = post.createdAt.substring(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/, '$1년 $2월 $3일');
  const { pathname } = useLocation();

  // 좋아요 요청
  const handleLike = async () => {
    try {
      const data = await likePost(post.id, isHearted, userToken);
      setIsHearted((prev) => !prev);
      setHeartCount(data.post.heartCount);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <S.PostArticle>
        <h3 className='a11y-hidden'>게시물 아이템</h3>
        <S.UserInfoSect>
          <h4 className='a11y-hidden'>게시물 유저 정보</h4>

          <S.ProfileLink to={`/profile/${post.author.accountname}`}>
            <PostUserProfileImg userProfileImg={post.author.image} />
            <S.UserNameInfo>
              <S.InfoName>{post.author.username}</S.InfoName>
              <S.InfoAccount>@ {post.author.accountname}</S.InfoAccount>
            </S.UserNameInfo>
          </S.ProfileLink>
          <S.ButtonIcon onClick={onClick}>
            <img src={ModalButtonImg} alt='숨겨진 모달창 나타내기' />
          </S.ButtonIcon>
        </S.UserInfoSect>

        <S.UserContentSect>
          <h4 className='a11y-hidden'>게시물 내용</h4>
          <S.UserPostText className={!pathname.startsWith('/postdetail') && 'multi-ellipsis'}>
            {post.content}
          </S.UserPostText>
          {post.image &&
            (post.image.includes(',') ? <Carousel img={post.image} /> : <S.UserPostImg src={post.image} />)}
          <S.LikeAndComment>
            <S.LikeBtn isHearted={isHearted} onClick={handleLike}>
              <span className='a11y-hidden'>좋아요 버튼</span>
              <span>{heartCount}</span>
            </S.LikeBtn>
            <S.CommentLink to={`/postdetail/${post.id}`}>
              <span className='a11y-hidden'>댓글 남기기 링크</span>
              <span>{commentCnt}</span>
            </S.CommentLink>
          </S.LikeAndComment>
          <S.TodayDate>{Date}</S.TodayDate>
        </S.UserContentSect>
      </S.PostArticle>
    </>
  );
};

export default PostItem;
