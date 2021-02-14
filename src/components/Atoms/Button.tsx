import React, { ReactElement } from "react"
import styled from "@emotion/styled"

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
    transition: transform .3s;

    h2 {
        color: ${props => props.chosen ? 'var(--color-almostWhite)' : 'var(--color-darkBlue)' };
        font-weight: 600;
        font-family: var(--font-family-primary);
    }

    &:hover {
        transform: ${props => !props.chosen ?  'scale(1.1)' : ''};

        ${props => props.chosen ?`
            background: linear-gradient(275deg, #13182A, #263867);
            background-size: 400% 400%;
        
            -webkit-animation: gradientAnimation 3s ease infinite;
            -moz-animation: gradientAnimation 3s ease infinite;
            animation: gradientAnimation 3s ease infinite;
            
            @-webkit-keyframes gradientAnimation {
                0%{background-position:0% 50%}
                50%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
            @-moz-keyframes gradientAnimation {
                0%{background-position:0% 50%}
                50%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }
            @keyframes gradientAnimation {
                0%{background-position:0% 50%}
                50%{background-position:100% 50%}
                100%{background-position:0% 50%}
            }` : ''
        }
    }
    z-index: 10;
`

const Button = ({ text, theme, chosen, onClick }: ButtonProps): ReactElement => (
  <StyledButton onClick={buttonName => onClick(buttonName)} chosen={chosen} theme={theme}><h2>{text}</h2></StyledButton>
)

Button.defaultProps = defaultProps
export default Button
