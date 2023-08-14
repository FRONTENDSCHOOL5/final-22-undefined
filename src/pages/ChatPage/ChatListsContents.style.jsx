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
export const ChatListCard = styled.section`
  .newIcon {
    width: 12px;
    height: 12px;
    position: relative;
    left: 10px;
  }
  .chatListTxt {
    display: inline-block;
    cursor: pointer;
  }
  h2 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.txtColor};
  }
  .date {
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
  }
`;
