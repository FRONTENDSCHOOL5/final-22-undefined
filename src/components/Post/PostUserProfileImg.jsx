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

PostUserProfileImg.defaultProps = {
  size: '42px',
}; //size props의 default값을 설정.

export default PostUserProfileImg;

const UserProfile = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  /* width: ${({ size }) => (size ? size : '42px')}; //defaultProps 없이는 이런식으로 조건부 렌더링 */
  margin-right: 12px;
  object-fit: cover;
  border-radius: 50%;
`;
