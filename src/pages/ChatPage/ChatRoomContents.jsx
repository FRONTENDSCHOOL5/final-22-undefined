import React from 'react';
import styled from 'styled-components';
import PostUserProfileImg from '../../components/Post/PostUserProfileImg';

const ContentsMain = styled.main`
  min-height: 80vh;
  background: #f2f2f2;
  padding: 16px;

  section {
    display: inline-block;
    max-width: 240px;
    padding: 12px;
    border: 1px solid #c4c4c4;
    border-radius: 0 10px 10px 10px;
  }
`;

const Contents = () => {
  return (
    <ContentsMain>
      <PostUserProfileImg size={'42px'} />
      <section>
        <span>가입을 축하드립니다!</span>
      </section>
    </ContentsMain>
  );
};

export default Contents;
