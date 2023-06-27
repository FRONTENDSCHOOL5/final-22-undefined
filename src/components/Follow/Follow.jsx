import React, { useContext, useState } from 'react';

import * as S from './Follow.style';
import { AuthContextStore } from '../../context/AuthContext';

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
