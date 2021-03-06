import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import breakpoints from "../../styles/breakpoints"

type ButtonProps = {
    text: string,
    theme: string,
    chosen: boolean,
    onClick: (e: string)  => {}
}

const defaultProps = {
  text: "click me",
  chosen: false,
  theme: "light"
}

const StyledButton = styled.button`
    width: 230px;
    height: 70px;
    background: ${props => props.chosen ? 'var(--color-darkBlue)' : 'transparent' };
    border: 1px solid var(--color-purple);
    border-radius: 3px;
    font-size: var(--font-size-h2);
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 45px 0 45px;
    cursor:pointer;
    will-change: transform;
    transition: transform .3s;

    h2 {
        color: ${props => props.chosen ? 'var(--color-almostWhite)' : 'var(--color-darkBlue)' };
        font-weight: 600;
        font-family: var(--font-family-primary);
    }

    &:hover {
        transform: ${props => !props.chosen ?  'scale(1.1)' : ''};
    }
    z-index: 10;
    @media (max-width: ${breakpoints.tablet}) {
        width: 200px;
        h2 {
            font-size: var(--font-size-h3);
        }
    }
`

const Button = ({ text, theme, chosen, onClick }: ButtonProps): ReactElement => (
  <StyledButton onClick={buttonName => onClick(buttonName)} chosen={chosen} theme={theme}><h2>{text}</h2></StyledButton>
)

Button.defaultProps = defaultProps
export default Button
