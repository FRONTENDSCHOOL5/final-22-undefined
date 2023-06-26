import { request } from './request';

// 특정 게시물 정보 가져오기
export const getSinglePost = async (postId, userToken) => {
  return await request(`post/${postId}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

// 게시글 업로드
export const uploadPost = async (userToken, content, image) => {
  return await request('post', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({ post: { content, image } }),
  });
};

// 게시물 수정
export const editPost = async (postId, userToken, content, image) => {
  return await request(`post/${postId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({ post: { content, image } }),
  });
};

// 게시물 삭제
export const deletePost = async (postId, userToken) => {
  return await request(`post/${postId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};

// 특정 사용자의 게시물 목록 가져오기
export const getPosts = async (userId, skip, userToken) => {
  return await request(`post/${userId}/userpost/?limit=6&skip=${skip}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};

// 게시물 좋아요, 좋아요 취소
export const likePost = async (postId, isHearted, userToken) => {
  return await request(`post/${postId}/${isHearted ? 'unheart' : 'heart'}`, {
    method: isHearted ? 'DELETE' : 'POST',
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

// 팔로우하는 사용자의 게시물 목록 가져오기
export const getFeeds = async (userToken) => {
  return await request(`post/feed`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};

// 게시글 신고
export const reportPost = async (postId, userToken) => {
  return await request(`post/${postId}/report`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};
