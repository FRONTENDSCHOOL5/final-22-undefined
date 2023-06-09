import React from 'react';
import styled from 'styled-components';
import Ellipse from '../../assets/basic-profile-img-bone-gd.svg';

const PostUserProfileImg = ({ userProfileImg, size }) => {
  //userProfileImg로 props 보낼때, myProfileImg(본인 프로필 사진) 혹은 userProfileImg(다른 유저 사진)로 받을 수 있음
  return <UserProfile size={size} src={userProfileImg ? userProfileImg : Ellipse} alt='사용자 프로필 이미지' />;
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
