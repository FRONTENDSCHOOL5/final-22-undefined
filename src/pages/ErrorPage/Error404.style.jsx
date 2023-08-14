import styled, { css } from 'styled-components';

import errorLogo from '../../assets/errorLogo.svg';
import Button from '../../components/common/Button/Button';

export const ErrorMessage = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 20px;
    text-align: center;
    &::before {
      content: '';
      display: block;
      background: url(${errorLogo}) no-repeat center/ contain;
      width: 140px;
      height: 140px;
      margin: 0 auto 25px;
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 120px;
`;
