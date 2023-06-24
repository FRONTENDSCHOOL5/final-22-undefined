import React from 'react';

const useRelativeDate = (date) => {
  const TEN_SECOND = 10 * 1000;
  const A_MINUTE = 60 * 1000;
  const A_HOUR = 60 * A_MINUTE;
  const A_DAY = 24 * A_HOUR;
  const A_WEEK = 7 * A_DAY;

  const time = new Date(date);
  const diff = new Date() - time;
  if (diff < TEN_SECOND) return `방금 전`;
  if (diff < A_MINUTE) return `${Math.floor(diff / 1000)}초 전`;
  if (diff < A_HOUR) return `${Math.floor(diff / 1000 / 60)}분 전`;
  if (diff < A_DAY) return `${Math.floor(diff / 1000 / 60 / 60)}시간 전`;
  if (diff < A_WEEK) return `${Math.floor(diff / 1000 / 60 / 60 / 24)}일 전`;
  return date.toLocaleString('ko-KR', {
    // hour12: false,
    dateStyle: 'medium',
  });
};

export default useRelativeDate;
