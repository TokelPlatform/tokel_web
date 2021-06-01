import React, { ReactElement } from "react"

import breakpoints from "../../styles/breakpoints"
import logo from "../../images/logo.svg"
import openLogo from "../../images/logo-open.svg"
import styled from "@emotion/styled"

type LogoImgProps  = {
    open?: boolean,
    width: string,
    mobileWidth: string
}
const defaultProps = {
    open: false,
    width: '24px',
    mobileWidth: '24px'
}
const Logo = styled.img<LogoImgProps>`
    width: ${props => props.width};
    @media (max-width: ${breakpoints.mobile}) {
        width: ${props => props.mobileWidth};
    }
`

const LogoImg = ({width, mobileWidth, open}: LogoImgProps): ReactElement => (
    <Logo mobileWidth={mobileWidth} width={width} src={open ? openLogo : logo}/>
)

LogoImg.defaultProps = defaultProps
export default LogoImg
