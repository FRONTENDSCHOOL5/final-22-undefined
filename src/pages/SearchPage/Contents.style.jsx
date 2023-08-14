import styled from 'styled-components';

export const H1 = styled.h1`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export const UserList = styled.ul`
  width: 100%;

  li {
    margin: 0 auto;
    max-width: 390px;
    padding-bottom: 20px;
  }

  div {
    display: flex;
  }

  .searchContents {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .userName {
    margin: 5px 0 6px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
  }
  .accountName {
    color: ${({ theme }) => theme.colors.txtColor};
    font-size: 12px;
    line-height: 15px;
  }
  .highlight {
    color: ${({ theme }) => theme.colors.warning};
  }
`;
