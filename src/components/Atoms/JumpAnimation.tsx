import { keyframes } from '@emotion/react';

const jump = keyframes`
  15% {
    transform: translateY(5px);
  }
  30% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(3px);
  }
  65% {
    transform: translateY(-3px);
  }
  80% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
`;

export default jump;
