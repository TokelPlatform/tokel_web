import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

import { keyframes } from '@emotion/react';
import breakpoints from '../../styles/breakpoints';

type Props = {
  randomNumber?: number;
  right: boolean;
  bottom?: boolean;
  curve?: string;
};

type CurveAnimationProps = {
  image: string;
  startFromRight: boolean;
  startFromBottom?: boolean;
  curve?: string;
};

const curveAnimation = keyframes`
  from {
    transform: rotate(-45deg) translate(-550px);
  }

  to {
    transform: rotate(110deg) translate(-550px);
  }
`;

const AnimatedObject = styled.img<Props>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  z-index: 2;
  animation: ${curveAnimation} 25s linear infinite alternate;

  @media (max-width: ${breakpoints.mobilebig}) {
    animation: none;
    display: none;
  }
`;

const CurveAnimation = ({
  image,
  startFromRight = false,
  startFromBottom = false,
}: CurveAnimationProps): ReactElement => {
  return <AnimatedObject src={image} right={startFromRight} bottom={startFromBottom} />;
};

export default CurveAnimation;
