import React, { ReactElement } from "react"
import styled from "@emotion/styled"

type ButtonProps = {
    text: string,
    theme: string
}

const defaultProps = {
  text: "click me",
  theme: "light"
}

const StyledButton = styled.button`
    width: 230px;
    height: 70px;
    background: ${props => props.theme == 'dark' ? 'var(--color-darkBlue)' : 'transparent' };
    border: 1px solid var(--color-purple);
    border-radius: 3px;
    font-size: var(--font-size-h2);
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 45px 0 45px;
    cursor:pointer;
    transition: transform .3s;

    p {
        color: ${props => props.theme == 'dark' ? 'var(--color-almostWhite)' : 'var(--color-darkBlue)' };
        font-family: var(--font-family-primary);
    }

    &:hover {
        transform: scale(1.1);
        background-color: var(--color-darkBlue);
        p {
            color: var(--color-almostWhite) ;
        }
    }
`

const Button = ({ text, theme }: ButtonProps): ReactElement => (
  <StyledButton theme={theme}><p>{text}</p></StyledButton>
)

Button.defaultProps = defaultProps
export default Button
