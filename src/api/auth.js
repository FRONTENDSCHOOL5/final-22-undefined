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

// 이메일, 아이디 중복 검사
// ...

// 이미 존재하는 이메일인지 검사
// ...

// 이미 존재하는 accountname인지 검사
// ...
