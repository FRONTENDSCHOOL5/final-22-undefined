import { css } from 'styled-components';

const loadingAnimation = css`
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      background-position: -100% 0;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

export default loadingAnimation;
