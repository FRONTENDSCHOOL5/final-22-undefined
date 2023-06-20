import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 0 6px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
    border-top: 1px solid ${colors.gray};
    color: ${colors.txtColor};
  `}
`;

export const Wrap = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Li = styled.li`
  width: 84px;
  height: 60px;
  text-align: center;
  padding-top: 10px;
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
