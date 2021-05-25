import React, { ReactElement } from "react"

import logoText from "../../images/logo-text.svg"
import styled from "@emotion/styled"

const Logo = styled.img`
    width: 100px;
`

const LogoText = (): ReactElement => (
    <Logo src={logoText}></Logo>
)

export default LogoText
