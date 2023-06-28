import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul``;
export const Li = styled.li`
  position: relative;
  & + & {
    margin-top: 40px;
  }
`;
export const UserAuth = styled.div`
  display: flex;
`;
export const ProfileLink = styled(Link)``;

export const Username = styled.strong`
  display: inline-block;
  margin: 2px 5px 0 0;
  font-weight: 500;
  line-height: 18px;
`;

export const UploadTime = styled.span`
  font-size: 10px;
  line-height: 13px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.txtColor};
  &::before {
    content: '·';
    margin-right: 4px;
  }
`;

export const PostComment = styled.p`
  /* font-size: 14px; */
  padding-left: 48px;
`;
// 모달 버튼 아이콘
export const ButtonIcon = styled.button`
  width: 18px;
  position: absolute;
  gap: 12px;
  top: 5px;
  right: 0;
`;
