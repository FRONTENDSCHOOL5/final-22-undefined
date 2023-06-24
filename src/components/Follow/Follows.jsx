import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '../common/Button/Button';
import Img from '../../assets/post-img-example.png';
import { Link } from 'react-router-dom';
import { AuthContextStore } from '../../context/AuthContext';

const List = styled.ul``;

const Item = styled.li`
  margin-bottom: 16px;

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
  /* background-color: pink; */
`;

const Intro = styled.p`
  font-size: 12px;
  min-height: 17px;
  margin-top: 6px;
  /* background-color: yellow; */
  color: ${({ theme }) => theme.colors.txtColor};
`;

const Follows = ({ followList, setFollowList }) => {
  const { userToken } = useContext(AuthContextStore);

  const handleClick = async (event, follow) => {
    event.preventDefault();
    const { accountname, isfollow } = follow;
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
      setFollowList(
        followList.map((li) => {
          if (li.accountname === data.profile.accountname) {
            return { ...li, isfollow: !li.isfollow };
          }
          return li;
        }),
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <List>
      {followList.map((follow) => {
        const { _id, accountname, username, image, intro, isfollow } = follow;
        return (
          <Item key={_id}>
            <StyledLink to={`/profile/${accountname}`}>
              <ProfileImg size='22px' src={image} alt={`${accountname}의 프로필 이미지`} />
              <Container>
                <UserName className='sl-ellipsis'>{username}</UserName>
                <Intro className='sl-ellipsis'>{intro}</Intro>
              </Container>
              <StyledBtn
                mode={isfollow ? 'active' : 'default'}
                size='sm'
                onClick={(event) => handleClick(event, follow)}
              >
                {isfollow ? '취소' : '팔로우'}
              </StyledBtn>
            </StyledLink>
          </Item>
        );
      })}
    </List>
  );
};

export default Follows;
