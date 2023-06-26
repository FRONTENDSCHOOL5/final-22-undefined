import { request } from './request';

// 특정 사용자 정보 불러오기
export const getUserInfo = async (userId, userToken) => {
  return await request(`profile/${userId}`, {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

// 나의 정보 불러오기
export const getMyInfo = async (userToken) => {
  return await request('user/myinfo', {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

// 프로필 수정하기
export const editProfile = async (userToken, formData, image) => {
  return await request('user', {
    method: 'PUT',
    headers: { Authorization: `Bearer ${userToken}` },
    body: JSON.stringify({ user: { ...formData, image } }),
  });
};
