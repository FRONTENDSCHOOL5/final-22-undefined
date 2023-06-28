import { request } from './request';

// 회원가입
export const join = async (state, formData, image) => {
  return await request('user', {
    method: 'POST',
    body: JSON.stringify({ user: { ...state, ...formData, image } }),
  });
};

// 로그인
export const login = async (email, password) => {
  return await request('user/login', {
    method: 'POST',
    body: JSON.stringify({ user: { email, password } }),
  });
};

// 토큰 검증
// ...

// 이미 존재하는 이메일(또는 계정)인지 검사
export const validateForm = async (id, formData) => {
  return await request(`user/${id}valid`, {
    method: 'POST',
    body: JSON.stringify({ user: { [id]: formData[id] } }),
  });
};
