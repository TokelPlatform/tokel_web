import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import logoText from "../../images/logo-text.svg"

const Logo = styled.img`
    width: 200px;
`

const LogoText = (): ReactElement => (
    <Logo src={logoText}></Logo>
)

export default LogoText
