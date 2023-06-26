import { request } from './request';

// 댓글 리스트 가져오기
export const getComments = async (postId, userToken) => {
  return await request(`post/${postId}/comments/?limit=0&skip=0`, {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

// 댓글 작성
// ...

// 댓글 삭제
// ...

// 댓글 신고
export const reportComment = async (postId, commentId, userToken) => {
  return await request(`post/${postId}/comments/${commentId}/report`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      report: {
        comment: commentId,
      },
    }),
  });
};
