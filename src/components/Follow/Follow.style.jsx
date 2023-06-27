import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';

export const Item = styled.li`
  margin-bottom: 16px;
  list-style: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 11px;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const StyledBtn = styled(Button)`
  width: 56px;
  flex-shrink: 0;
`;

export const Container = styled.div`
  width: 228px;
  flex-shrink: 0;
  align-self: flex-start;
  padding-top: 3px;
`;

export const UserName = styled.strong`
  font-size: 14px;
  font-weight: 500;
  min-height: 18px;
`;

export const Intro = styled.p`
  font-size: 12px;
  min-height: 17px;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.txtColor};
`;
