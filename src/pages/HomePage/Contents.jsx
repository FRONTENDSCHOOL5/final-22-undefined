import { React } from 'react';
import home from '../../assets/symbol-logo-gray.png';
import styled, { css } from 'styled-components';
import PostList from '../../components/Post/PostList';

const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 20px;
  &::before {
    content: '';
    display: block;
    background: url(${home}) no-repeat center/ 100px 100px;
    width: 100px;
    height: 100px;
    margin: 0 auto 25px;
  }
`;

const SearchIcon = styled.a`
  width: 120px;
  height: 44px;
  display: inline-block;
  padding: 15px 0;
  border-radius: 44px;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.primary};
    border-top: 1px solid ${colors.gray};
    color: ${colors.white};
  `}
  font-weight: 500;
  font-size: 14px;
  line-height: 17.53px;
  text-align: center;
`;

const Contents = ({ posts, setPosts, isLoginUser }) => {
  return (
    <>
      {posts.length !== 0 ? (
        <>
          <PostList posts={posts} setPosts={setPosts} isLoginUser={isLoginUser} />
        </>
      ) : (
        <>
          <P>유저를 검색해 팔로우 해보세요!</P>
          <SearchIcon href='/search'>검색하기</SearchIcon>
        </>
      )}
    </>
  );
};

export default Contents;
