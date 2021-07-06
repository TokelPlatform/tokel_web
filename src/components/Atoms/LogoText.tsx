import React, { ReactElement } from "react"

import logoText from "../../images/logo-text.svg"
import styled from "@emotion/styled"

const Logo = styled.img`
    width: 100px;
`

const LogoText = (): ReactElement => (
    <a href="/"><Logo src={logoText}></Logo></a>
)

export default LogoText
