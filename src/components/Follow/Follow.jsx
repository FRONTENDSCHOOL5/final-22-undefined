import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';
import { AuthContextStore } from '../../context/AuthContext';

const Item = styled.li`
  margin-bottom: 16px;
  list-style: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 11px;
  align-items: center;
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
  min-height: 18px;
`;

const Intro = styled.p`
  font-size: 12px;
  min-height: 17px;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.txtColor};
`;

const Follow = ({ item }) => {
  const { userToken, userAccountname } = useContext(AuthContextStore);
  const [follow, setFollow] = useState(item);
  const { accountname, image, username, intro, isfollow } = follow;

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.mandarin.weniv.co.kr/profile/${accountname}/${isfollow ? 'unfollow' : 'follow'}`,
        {
          method: isfollow ? 'DELETE' : 'POST',
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      setFollow((prev) => ({ ...prev, isfollow: !prev.isfollow }));
    } catch (err) {
      console.log(err.message);
    }
  };

  // if (follow.accountname === userAccountname) return null;

  return (
    <Item>
      <StyledLink to={`/profile/${accountname}`}>
        <ProfileImg size='22px' src={image} alt={`${accountname}의 프로필 이미지`} />
        <Container>
          <UserName className='sl-ellipsis'>{username}</UserName>
          <Intro className='sl-ellipsis'>{intro}</Intro>
        </Container>
        {follow.accountname !== userAccountname && (
          <StyledBtn mode={isfollow ? 'active' : 'default'} size='sm' onClick={handleClick}>
            {isfollow ? '취소' : '팔로우'}
          </StyledBtn>
        )}
      </StyledLink>
    </Item>
  );
};

export default Follow;
