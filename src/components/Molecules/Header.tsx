import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import logo from "../../images/logo.svg"

const defaultProps = {
}

const StyledHeader = styled.header`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 1rem 7rem 0 5rem;
`

const Logo = styled.img`
    height: 46px;
`

const Header = () => {
  return (
    <StyledHeader>
        <Logo src={logo}/>
    </StyledHeader>
  )
}

Header.defaultProps = defaultProps
export default Header
