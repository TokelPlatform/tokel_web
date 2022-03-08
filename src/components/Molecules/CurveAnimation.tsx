import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

import { keyframes } from '@emotion/react';
// import { curves } from 'data/constants';
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

const xAxis = keyframes`
    50% {
      transform: translateX(100vh);
    }
`;
const yAxis = keyframes`
    50% {
      transform: translateY(10vw);
    }
`;
const zRotate = keyframes`
    O {
      transform: rotateZ(0deg);
    }
    20% {
      transform: rotateZ(180deg);
    }
    /* 50% {
      transform: rotateZ(270deg);
    }
    80% {
      transform: rotateZ(70deg);
    } */
`;
const AnimatedObject = styled.img<Props>`
  animation: ${xAxis} 18s linear infinite;
  @media (max-width: ${breakpoints.mobilebig}) {
    animation: none;
    display: none;
  }
`;

const CurveAnimationRoot = styled.div<Props>`
  animation: ${yAxis} 26s ease-in-out infinite;
  @media (max-width: ${breakpoints.mobilebig}) {
    animation: none;
    transform: none;
  }
`;

const ZAxisMotion = styled.div`
  animation: ${zRotate} 120s infinite ease-in-out;
  @media (max-width: ${breakpoints.mobilebig}) {
    animation: none;
  }
`;

const CurveAnimation = ({
  image,
  startFromRight = false,
  startFromBottom = false,
  curve,
}: CurveAnimationProps): ReactElement => {
  return (
    <CurveAnimationRoot right={startFromRight} curve={curve}>
      <ZAxisMotion>
        <AnimatedObject src={image} right={startFromRight} bottom={startFromBottom} />
      </ZAxisMotion>
    </CurveAnimationRoot>
  );
};

export default CurveAnimation;
