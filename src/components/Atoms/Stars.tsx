import React, { ReactElement, useEffect, useState } from 'react';
import { css, keyframes } from '@emotion/react';

import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';

type StarProps = {
  starSize: string;
  top?: string;
};

const rand = () => Math.random() * 5000 + 1;
const getSize = (type: string): string =>
  type == 'small' ? '1px' : type === 'medium' ? '1.5px' : '2px';

const getStars = (n: number, div: number): string => {
  let value = () => rand() + 'px ' + rand() + 'px #F0F0F0';
  let result = value();
  for (let i = 2; i < n / div; i++) {
    result = result.concat(', ', value());
  }
  return result;
};

const shadows = {
  small: getStars(5000, 2),
  medium: getStars(5000, 4),
  big: getStars(5000, 6),
};

const animStar = keyframes`
    from {transform: translateY(0px)}
    to {transform: translateY(-1000px)}
`;

type StarContainerProps = {
  size: string;
  top: string;
};

/**
 * will-change was added coz the stars were blurry in Chrome
 * https://css-tricks.com/almanac/properties/w/will-change/
 */
const StarContainer = styled.div<StarContainerProps>`
  will-change: transform;
  width: ${props => getSize(props.size)};
  height: ${props => getSize(props.size)};
  background: transparent;
  box-shadow: ${props => shadows[props.size]};
  &:after {
    content: ' ';
    position: absolute;
    top: ${props => (props.top ? props.top : '2000px')};
    width: ${props => getSize(props.size)};
    height: ${props => getSize(props.size)};
    background: transparent;
    box-shadow: ${props => shadows[props.size]};

    @media (max-width: ${breakpoints.mobile}) {
      top: ${props => (props.top ? props.top : '4000px')};
    }
  }
`;

const getTimeByStarSize = size => {
  switch (size) {
    case 'small':
      return '70s';
    case 'medium':
      return '90s';
    default:
      return '120s';
  }
};

const Stars = ({ starSize }: StarProps): ReactElement => {
  let defaultHeight;

  if (typeof window !== `undefined`) {
    // eslint-disable-next-line no-undef
    defaultHeight = window.innerHeight;
  }

  const [deviceHeight, setDeviceHeight] = useState(defaultHeight);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    console.log(document.body.scrollHeight);
    // eslint-disable-next-line no-undef
    setDeviceHeight(document.body.scrollHeight);
  }, []);

  return (
    <StarContainer
      size={starSize}
      top={deviceHeight - 2000 + 'px'}
      css={css`
        animation: ${animStar} ${getTimeByStarSize(starSize)} linear infinite;
      `}
    />
  );
};

Stars.defaultProps = {
  starSize: 'small',
  top: null,
};
export default Stars;
