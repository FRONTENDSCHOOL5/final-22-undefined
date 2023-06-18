import React from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '../../../assets/icon/icon-arrow-left.png';

const Header = styled.header`
  padding: 0 16px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 13px;
`;

const BackBtn = styled.button`
  width: 22px;
  height: 22px;
  background: url(${ArrowLeftIcon}) no-repeat center;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 400;
`;

const FollowListHeader = ({ type }) => {
  return (
    <Header>
      <BackBtn />
      <Title>{type}</Title>
    </Header>
  );
};

export default FollowListHeader;
