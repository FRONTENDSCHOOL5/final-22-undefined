import React, { useContext, useState } from 'react';

import * as S from './Follow.style';
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
      await followApi(accountname, isfollow, userToken);
      setFollow((prev) => ({ ...prev, isfollow: !prev.isfollow }));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <S.Item>
      <S.StyledLink to={`/profile/${accountname}`}>
        <S.ProfileImg size='22px' src={image} alt={`${accountname}의 프로필 이미지`} />
        <S.Container>
          <S.UserName className='sl-ellipsis'>{username}</S.UserName>
          <S.Intro className='sl-ellipsis'>{intro}</S.Intro>
        </S.Container>
        {follow.accountname !== userAccountname && (
          <S.StyledBtn mode={isfollow ? 'active' : 'default'} size='sm' onClick={handleClick}>
            {isfollow ? '취소' : '팔로우'}
          </S.StyledBtn>
        )}
      </S.StyledLink>
    </S.Item>
  );
};

export default Follow;
