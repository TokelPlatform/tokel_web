import React, { ReactElement } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ButtonLink from './ButtonLink';

type ButtonProps = {
  text: string;
  theme: string;
  chosen: boolean;
  width?: string;
  height?: string;
  onClick: () => {};
  url?: string;
  className: string;
};

const defaultProps = {
  text: 'click me',
  chosen: false,
  theme: 'light',
  width: '230px',
  onClick: () => {},
};

export const Colors = {
  PURPLE: 'purple',
  TRANSPARENT: 'transparent',
  WHITE: 'white',
  BLACK: 'black',
  YELLOW: 'yellow',
  GRAY: 'gray',
};

const getTheme = theme => {
  switch (theme) {
    case Colors.PURPLE:
      return css`
        background: var(--gradient-purple-direct);
        border: 4px solid var(--color-purple);
        &:hover {
          border-color: var(--color-almostWhite);
          transform: scale(1.1);
        }
      `;
    case Colors.WHITE:
      return css`
        background: var(--color-almostWhite);
        border: none;
        outline: none;
        h5 {
          color: #000000;
          font-weight: 700;
        }

        &:hover:after {
          opacity: 1;
          transform: scale(1.1);
        }
      `;
    case Colors.BLACK:
      return css`
        background: #000000;
        border: 1px solid;
        border-image-slice: 1;
        border-image-source: var(--gradient-purple-to-lighblue);
        h5 {
          color: var(--color-almostWhite);
          font-weight: 700;
        }

        &:hover {
          border-color: var(--color-purple);
          transform: scale(1.1);
        }
      `;
    case Colors.YELLOW:
      return css`
        background: var(--color-base-richyellow);
        border: 3px solid white;
        h5 {
          color: black;
          font-weight: 700;
        }
      `;
    case Colors.GRAY:
      return css`
        background-color: transparent;
        border: 1px solid var(--color-base-slate);
        h5 {
          color: #fff;
          opacity: 0.8;
          font-weight: 400;
          font-size: var(--font-size-small-p);
        }
        &:hover {
          border-color: var(--color-purple);
          transform: scale(1.1);
        }
      `;
    default:
      return css`
        background: transparent;
        border: 4px solid var(--color-almostWhite);
        font-weight: bold;
      `;
  }
};

type StyledButtonProps = {
  theme: string;
  width: string;
  height?: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  ${props => getTheme(props.theme)};
  width: ${props => props.width};
  height: ${props => (props.height ? props.height : '70px')};
  cursor: pointer;
  will-change: transform;
  transition: transform 0.3s;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 3;
  position: relative;
  border-radius: 5px;
`;

const Button = ({
  text,
  theme,
  width,
  height,
  onClick,
  className,
  url,
}: ButtonProps): ReactElement => (
  <ButtonLink className={className} to={url ? url : '#'}>
    <StyledButton onClick={() => onClick()} width={width} height={height} theme={theme}>
      <h5>{text}</h5>
    </StyledButton>
  </ButtonLink>
);

Button.defaultProps = defaultProps;
export default Button;
