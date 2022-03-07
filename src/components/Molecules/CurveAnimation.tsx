import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

import { keyframes } from '@emotion/react';
import { curves } from 'data/constants';
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

const xAxis = right => keyframes`
    50% {
      transform: translateX(${right ? '-90vw' : '70vw'});
    }
`;
const yAxis = right => keyframes`
    50% {
      transform: translateY(${right ? '70vh' : '30vh'});
    }
`;

const zRotate = keyframes`
    O {
      transform: rotateZ(70deg);
    }
    20% {
      transform: rotateZ(180deg);
    }
    50% {
      transform: rotateZ(270deg);
    }
    80% {
      transform: rotateZ(70deg);
    }
`;
const AnimatedObject = styled.img<Props>`
  animation: ${p => xAxis(p.right)} 60s linear infinite;
  position: absolute;
  z-index: 2;
  // starting point of the animation;
  ${p => {
    console.log(p.bottom);
    return p.bottom ? 'bottom: 100px' : p.right ? 'right: -200px' : 'left: -200px';
  }};
  @media (max-width: ${breakpoints.mobilebig}) {
    animation: none;
    display: none;
  }
`;

const CurveAnimationRoot = styled.div<Props>`
  transform: ${p => (p.bottom ? 'translateX(-200px)' : 'translateY(-200px)')};
  animation: ${p => yAxis(p.right)} 60s ${p => curves[p.curve]} infinite;
  position: relative;
  z-index: 3;
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
