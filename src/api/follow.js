import { request } from './request';

// 팔로우, 언팔로우하기
export const follow = async (accountname, isfollow, userToken) => {
  return await request(`profile/${accountname}/${isfollow ? 'unfollow' : 'follow'}`, {
    method: isfollow ? 'DELETE' : 'POST',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};

// 팔로워, 팔로잉 리스트 불러오기
export const getFollowList = async (accoutname, type, userToken) => {
  return await request(`profile/${accoutname}/${type}?limit=0`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};
