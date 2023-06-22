import styled, { css } from 'styled-components';

export const Section = styled.section`
  padding: 20px 0px;
  margin-top: 6px;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-top: 0.5px solid ${theme.colors.gray};
    border-bottom: 0.5px solid ${theme.colors.gray};
  `}
`;

export const Title = styled.h2`
  font-weight: 16px;
  font-size: 16px;
`;

export const List = styled.ul`
  margin-top: 16px;
  display: flex;
  gap: 10px;
  overflow-x: auto;
`;

export const Item = styled.li`
  width: 140px;
  flex-shrink: 0;

  &:last-child {
    margin-right: 21px;
  }
`;

export const ImgCover = styled.div`
  height: 90px;
  border-radius: 8px;
  border: ${({ theme }) => `0.5px solid ${theme.colors.gray}`};
  margin-bottom: 6px;
`;

export const Img = styled.img`
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const Name = styled.strong`
  font-size: 14px;
  font-weight: 400;
  display: block;
  margin-bottom: 4px;
`;

export const Price = styled.strong`
  font-size: 12px;
  display: block;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Soldout = styled.p`
  font-size: 14px;
`;
