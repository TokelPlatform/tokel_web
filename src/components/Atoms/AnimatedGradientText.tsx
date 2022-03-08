import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shine = keyframes`
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
`;

const AnimatedGradientText = styled.h5`
  &:hover {
    background-size: 200% auto;
    background-image: var(--gradient-purple-direct);
    background-clip: text;
    text-fill-color: transparent;
    animation: ${shine} 3s linear infinite;
  }
`;

export default AnimatedGradientText;
