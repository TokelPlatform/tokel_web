import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import logo from "../../images/logo.svg"

const Logo = styled.img`
    width: 24px;
`

const LogoImg = (): ReactElement => (
    <Logo src={logo}></Logo>
)

export default LogoImg
