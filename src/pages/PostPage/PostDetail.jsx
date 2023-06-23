import React, { useContext, useEffect, useState } from 'react';
import FeedHeader from '../../components/common/Header/FeedHeader';
import Comment from '../../pages/ChatPage/Comment';
import { AuthContextStore } from '../../context/AuthContext';
import styled from 'styled-components';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import { Link, useParams } from 'react-router-dom';
import PostItem from '../../components/Post/PostItem';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';
import ModalButtonImg from '../../assets/icon/icon-more-vertical.png';

const PostDetail = () => {
  const [userInfo, setUserInfo] = useState({});
  const { post_id } = useParams();
  const [userProfileImg, setUserProfileImg] = useState('');
  const { userToken } = useContext(AuthContextStore);
  const [comments, setComments] = useState([]);
  console.log(comments);

  //userInfo를 위한 요청
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch(`https://api.mandarin.weniv.co.kr/post/${post_id}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setUserInfo(data.post);

        //댓글 리스트 불러오기
        const res = await fetch(`https://api.mandarin.weniv.co.kr/post/${post_id}/comments`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          },
        });
        const result = await res.json();
        console.log(result.comments);
        setComments(result.comments);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUserInfo();
  }, [post_id]);

  // 프로필 이미지 요청(댓글 페이지는 언제나 자기 프로필 사진)
  useEffect(() => {
    const handleUserImg = async () => {
      try {
        const res = await fetch('https://api.mandarin.weniv.co.kr/user/myinfo', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        const data = await res.json();
        setUserProfileImg(data.user.image);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleUserImg();
  }, []);

  return (
    <>
      <FeedHeader />
      <Main>
        <ArticleWrapper>
          <PostWrapper>
            <PostArticle>
              <PostItem
                userInfo={userInfo.author}
                itemPostId={post_id}
                postContent={userInfo.content}
                postImg={userInfo.image}
              />
              <h2 className='a11y-hidden'>댓글 해당 게시물</h2>
            </PostArticle>
          </PostWrapper>
        </ArticleWrapper>
        <CommentWrapper>
          <PostSection>
            <h2 className='a11y-hidden'>댓글 목록</h2>
            {comments &&
              comments.map((item) => {
                return (
                  <Ul>
                    <Li key={item.id}>
                      <UserAuth>
                        <ProfileLink to={`/profile/${item.author.accountname}`}>
                          <PostUserProfileImg size={'36px'} userProfileImg={userProfileImg} />
                        </ProfileLink>
                        <NameLink to={`/profile/${item.author.accountname}`}>
                          <Username>{item.author.username}</Username>
                        </NameLink>
                        <UploadTime>2minutes ago</UploadTime>
                        <ButtonIcon>
                          <img src={ModalButtonImg} alt='숨겨진 모달창 나타내기' />
                        </ButtonIcon>
                      </UserAuth>
                      <PostComment>{item.content}</PostComment>
                    </Li>
                  </Ul>
                );
              })}
          </PostSection>
        </CommentWrapper>
      </Main>
      <Comment atChatroom={false} userProfileImg={userProfileImg} postId={post_id} />
    </>
  );
};

export default PostDetail;

const Main = styled.main``;
const ArticleWrapper = styled.div`
  width: 100%;
  padding: 20px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;
const PostWrapper = styled(Wrapper)`
  margin-top: 48px;
`;
const CommentWrapper = styled(Wrapper)`
  padding: 20px 0;
`;
const PostArticle = styled.article``;
const PostSection = styled.section``;
const Ul = styled.ul``;
const Li = styled.li`
  & + & {
    margin-top: 20px;
  }
`;
const UserAuth = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 4px;
`;
const ProfileLink = styled(Link)``;
const NameLink = styled(Link)`
  margin: 5px 5px 0 0;
`;
const UploadTime = styled.span`
  font-size: 10px;
  line-height: 13px;
  margin-top: 7.5px;
  color: ${({ theme }) => theme.colors.txtColor};
  &::before {
    content: '·';
    margin-right: 4px;
  }
`;
const Username = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;
const PostComment = styled.p`
  padding-left: 48px;
`;
// 모달 버튼 아이콘
const ButtonIcon = styled.button`
  position: absolute;
  gap: 12px;
  right: 0;
`;
