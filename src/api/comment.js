import { request } from './request';

// 댓글 리스트 가져오기
export const getComments = async (postId, userToken) => {
  return await request(`post/${postId}/comments/?limit=0&skip=0`, {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

// 댓글 작성
export const addComment = async (postId, text, userToken) => {
  return await request(`post/${postId}/comments`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      comment: {
        content: text,
      },
    }),
  });
};

// 댓글 삭제
export const deleteComment = async (postId, commentId, userToken) => {
  return await request(`post/${postId}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
};

// 댓글 신고
// ...
