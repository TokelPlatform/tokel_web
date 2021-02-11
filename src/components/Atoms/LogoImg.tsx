import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import logo from "../../images/logo.svg"
import openLogo from "../../images/logo-open.svg"

type LogoImgProps  = {
    open: boolean,
    width: string
}
const defaultProps = {
    open: false,
    width: '24px'
}
const Logo = styled.img`
    width: ${props => props.width};
`

const LogoImg = ({width, open}: LogoImgProps): ReactElement => (
    <Logo width={width} src={open ? openLogo : logo}/>
)

LogoImg.defaultProps = defaultProps
export default LogoImg
