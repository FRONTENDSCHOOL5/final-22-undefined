import styled from 'styled-components';
import HeartIcon from '../../assets/icon/icon-heart.png';
import HeartIconFill from '../../assets/icon/icon-heart-active.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';
import { Link } from 'react-router-dom';

export const PostArticle = styled.article`
  position: relative;
`;

export const UserInfoSect = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const UserNameInfo = styled.div`
  flex-grow: 1;
`;

export const InfoName = styled.p`
  margin: 4px 0;
`;
export const InfoAccount = styled.p`
  font-size: 12px;
`;

// 모달 버튼 아이콘
export const ButtonIcon = styled.button`
  position: absolute;
  /* gap: 12px; */
  top: 3px;
  right: 0;
`;

export const UserContentSect = styled.section`
  padding-left: 54px;
`;

export const UserPostText = styled.p`
  margin-bottom: 16px;
  word-break: break-all;
`;

export const UserPostImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  overflow: hidden;
  object-fit: cover;
`;

export const LikeAndComment = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 16px;
`;

export const LikeBtn = styled.button`
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

export const CommentLink = styled(Link)`
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

export const TodayDate = styled.p`
  font-size: 10px;
`;
