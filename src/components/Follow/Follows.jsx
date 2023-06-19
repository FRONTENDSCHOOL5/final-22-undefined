import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button/Button';
import Img from '../../assets/post-img-example.png';

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  gap: 11px;
  align-items: center;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledBtn = styled(Button)`
  width: 56px;
  flex-shrink: 0;
`;

const Container = styled.div`
  width: 228px;
  flex-shrink: 0;
  align-self: flex-start;
  padding-top: 3px;
`;

const UserName = styled.strong`
  font-size: 14px;
  font-weight: 500;
`;

const Intro = styled.p`
  font-size: 12px;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.txtColor};
`;

const Follows = () => {
  return (
    <List>
      <Item>
        <ProfileImg size='22px' src={Img} alt='OO의 프로필 이미지' />
        <Container>
          <UserName className='sl-ellipsis'>애월읍 한라봉 최고 맛집 애월읍 한라봉 최고 맛집</UserName>
          <Intro className='sl-ellipsis'>
            정성을 다해 농사짓는 한라봉 정성을 다해 농사짓는 한라봉 정성을 다해 농사짓는 한라봉
          </Intro>
        </Container>
        <StyledBtn size='sm'>팔로우</StyledBtn>
      </Item>
      <Item>
        <ProfileImg src={Img} alt='OO의 프로필 이미지' />
        <Container>
          <UserName>애월읍 한라봉 최고 맛집</UserName>
          {/* <Intro className='sl-ellipsis'>
            정성을 다해 농사짓는 한라봉 정성을 다해 농사짓는 한라봉 정성을 다해 농사짓는 한라봉
          </Intro> */}
        </Container>
        {/* <StyledBtn size='sm'>팔로우</StyledBtn> */}
        <StyledBtn mode='active' size='sm'>
          취소
        </StyledBtn>
      </Item>
      <Item>
        <ProfileImg src={Img} alt='OO의 프로필 이미지' />
        <Container>
          <UserName>애월읍 한라봉 최고 맛집</UserName>
          <Intro className='sl-ellipsis'>
            정성을 다해 농사짓는 한라봉 정성을 다해 농사짓는 한라봉 정성을 다해 농사짓는 한라봉
          </Intro>
        </Container>
        <StyledBtn size='sm'>팔로우</StyledBtn>
      </Item>
    </List>
  );
};

export default Follows;
