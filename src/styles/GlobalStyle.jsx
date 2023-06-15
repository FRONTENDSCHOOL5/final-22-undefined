import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import './font.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: "Pretendard-Regular, sans-serif";
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    vertical-align: top;
    width: 100%;
    height: auto;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table, input {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  ol, ul{
    list-style: none;
  }
  
  button {
    font-family: inherit;
    padding: 0;
    border: none;
    font-size: inherit;
    font-weight: inherit;
    background-color: inherit;
    cursor: pointer;
  }

  /* 숨김 텍스트 처리 */
  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  /* 한줄 말줄임 */
  .sl-ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 두줄 말줄임 */
  .multi-ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export default GlobalStyle;
