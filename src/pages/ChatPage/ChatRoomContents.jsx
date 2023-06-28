import React from 'react';
import styled, { css } from 'styled-components';
import MainLayout from '../../components/common/MainLayout/MainLayout';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';

const ChatTxt = styled(MainLayout)`
  height: 100vh;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.bgGray};
  `}

  div {
    display: inline-block;
    max-width: 240px;
    padding: 12px;
    ${({ theme: { colors } }) => css`
      border: 1px solid ${colors.gray};
    `}
    border-radius: 0 10px 10px 10px;
  }
`;

const Contents = () => {
  return (
    <ChatTxt>
      <PostUserProfileImg />
      <div>
        <p>가입을 축하드립니다!</p>
      </div>
    </ChatTxt>
  );
};

export default Contents;
