import styled, { css } from 'styled-components';
import ListOnIcon from '../../assets/icon/icon-post-list-on.png';
import ListOffIcon from '../../assets/icon/icon-post-list-off.png';
import AlbumOnIcon from '../../assets/icon/icon-post-album-on.png';
import AlbumOffIcon from '../../assets/icon/icon-post-album-off.png';

export const Section = styled.section`
  margin-top: 6px;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-top: 0.5px solid ${theme.colors.gray};
  `};
`;

export const Title = styled.h2``;

export const Header = styled.header`
  border-bottom: ${({ theme }) => `0.5px solid ${theme.colors.gray}`};
  padding: 5px 15px 0 0;
  height: 44px;
  text-align: right;
`;

export const ListBtn = styled.button`
  width: 25px;
  height: 25px;
  background: ${({ isList }) => (isList ? `url(${ListOnIcon}) ` : `url(${ListOffIcon}) `)} no-repeat center;
  margin-right: 22px;
`;

export const AlbumBtn = styled.button`
  width: 25px;
  height: 25px;
  background: ${({ isAlbum }) => (isAlbum ? `url(${AlbumOnIcon})` : `url(${AlbumOffIcon})`)} no-repeat center;
`;
