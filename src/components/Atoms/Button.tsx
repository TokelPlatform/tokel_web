import React, { ReactElement } from 'react';

import breakpoints from '../../styles/breakpoints';
import buttonDecor from '../../images/general/button-decoration.svg';
import styled from '@emotion/styled';

type ButtonProps = {
  text: string;
  theme: string;
  chosen: boolean;
  width?: string;
  height?: string;
  onClick: () => {};
  showButtonDecor: boolean;
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
      return `
          background: var(--gradient-purple-direct);
          border-radius: 5px;
          border: 4px solid white;
          h2 { 
            color: var(--color-almostWhite);
            font-weight: 700;
          }
        `;
    case Colors.WHITE:
      return `
              background: var(--color-almostWhite);
              border-radius: 5px;
              border: none;
              h5 { 
                color: #000000;
                font-weight: 700;
              }
            `;
    case Colors.BLACK:
      return `
              background: #000000;
              border-radius: 5px;
              border: 1px solid var(--color-base-richyellow);
              h5 { 
                color: var(--color-base-richyellow);
                font-weight: 700;
              }
            `;
    case Colors.YELLOW:
      return `
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
        return `
                background: var(--color-darkBlue);
                border-radius: 3px;
                border: 1px solid var(--color-purple);
                h5 {
                    color: var(--color-almostWhite);
                    font-weight: 600;
                }
                `;
      }
      return `
          background: transparent;
          border-radius: 4px;
          background: none;
          border: 4px solid var(--color-almostWhite);
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
  p {
    font-size: 22px;
  }
  &:hover {
    transform: ${props => (!props.chosen ? 'scale(1.1)' : '')};
  }
  z-index: 10;
  @media (max-width: ${breakpoints.tablet}) {
    width: 200px;
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
  showButtonDecor = null,
}: ButtonProps): ReactElement => (
  <StyledButton
    onClick={() => onClick()}
    width={width}
    height={height}
    chosen={chosen}
    theme={theme}
  >
    {showButtonDecor && <img src={buttonDecor}></img>}
    <h5>{text}</h5>
  </StyledButton>
);

Button.defaultProps = defaultProps;
export default Button;
