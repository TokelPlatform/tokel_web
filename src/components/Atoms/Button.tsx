import React, { ReactElement } from 'react';

import breakpoints from '../../styles/breakpoints';
import buttonDecor from '../../images/general/button-decoration.svg';
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
  showButtonDecor?: boolean;
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
};

const getTheme = (theme, chosen) => {
  switch (theme) {
    case Colors.PURPLE:
      return css`
        background: var(--gradient-purple-direct);
        border-radius: 5px;
        border: 4px solid var(--color-purple);
        h2 {
          color: var(--color-almostWhite);
          font-weight: 700 !important;
        }

        &:hover {
          border-color: var(--color-almostWhite);
          transform: scale(1.1);
        }
      `;
    case Colors.WHITE:
      return css`
        background: var(--color-almostWhite);
        border-radius: 10px;
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
        border-radius: 5px;
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
        border-radius: 5px;
        border: 3px solid white;
        h5 {
          color: black;
          font-weight: 700;
        }
      `;
    default:
      // transparent theme
      if (chosen) {
        return css`
          background: var(--color-darkBlue);
          border-radius: 3px;
          border: 1px solid var(--color-purple);
          h5 {
            color: var(--color-almostWhite);
            font-weight: 600;
          }
        `;
      }
      return css`
        background: transparent;
        border-radius: 4px;
        border: 4px solid var(--color-almostWhite);
        font-weight: bold;
      `;
  }
};

type StyledButtonProps = {
  chosen: boolean;
  theme: string;
  width: string;
  height?: string;
};

const StyledButton = styled.button<StyledButtonProps>`
  ${props => getTheme(props.theme, props.chosen)};
  width: ${props => props.width};
  height: ${props => (props.height ? props.height : '70px')};
  cursor: pointer;
  will-change: transform;
  transition: transform 0.3s;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  position: relative;
  p {
    font-size: 22px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    /* width: 200px; */
    h2 {
      font-size: var(--font-size-h3);
    }
  }
`;

const Button = ({
  text,
  theme,
  chosen,
  width,
  height,
  onClick,
  className,
  url,
  showButtonDecor = null,
}: ButtonProps): ReactElement => (
  <ButtonLink className={className} to={url ? url : '#'}>
    <StyledButton
      onClick={() => onClick()}
      width={width}
      height={height}
      chosen={chosen}
      theme={theme}
    >
      {showButtonDecor && <img alt="buttondecoration" src={buttonDecor}></img>}
      <h5>{text}</h5>
    </StyledButton>
  </ButtonLink>
);

Button.defaultProps = defaultProps;
export default Button;
