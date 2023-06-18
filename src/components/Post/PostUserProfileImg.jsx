import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Ellipse from '../../assets/Ellipse-1.png';

const PostUserProfileImg = ({ userProfileImg, size }) => {
  return (
    <>
      <UserProfile size={size} src={userProfileImg ? `https://api.mandarin.weniv.co.kr/${userProfileImg}` : Ellipse} />
    </>
  );
};

export default PostUserProfileImg;

const UserProfile = styled.img`
  width: ${({ size }) => (size ? size : '42px')};
  height: ${({ size }) => (size ? size : '42px')};
  margin-right: 12px;
  object-fit: cover;
  border-radius: 50%;
`;
