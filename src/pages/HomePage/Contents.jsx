import React from 'react';

import home from '../../assets/symbol-logo-gray.png';
import styled from 'styled-components';

const Main = styled.main`
  height: calc(100vh - 108px);
`;

const Section = styled.section`
  padding: 220px 0 294px;
  text-align: center;
`;

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

const SearchBtn = styled.button`
  width: 120px;
  height: 44px;
  display: inline-block;
  background: #f26e22;
  border-radius: 44px;
  color: #ffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 17.53px;
  text-align: center;
`;

const Contents = () => {
  return (
    <Main>
      <Section>
        <P>유저를 검색해 팔로우 해보세요!</P>
        <SearchBtn>검색하기</SearchBtn>
      </Section>
    </Main>
  );
};

export default Contents;