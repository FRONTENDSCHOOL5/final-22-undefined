import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 390px;
  margin: 20px auto 0;
  /* 미정님 코드에서 이부분 추가했습니다..! Wrapper 아래에 고정하고 스크롤 생겼을 때 배경색이 있어야 겹치게 보이지 않아서 추가해놨습니다. */
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
    border-top: 1px solid ${colors.gray};
    color: ${colors.txtColor};
  `}/* 여기까지 */
`;

export const Wrap = styled.ul`
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const Li = styled.li`
  width: 84px;
  height: 60px;
  padding: 12px 0 6px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme, id, active }) => id === active && theme.colors.primary};
`;

export const IMG = styled.img`
  width: 24px;
  height: 24px;
`;

export const P = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  margin-top: 2px;
`;
