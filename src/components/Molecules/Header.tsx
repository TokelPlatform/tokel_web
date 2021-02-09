import React from "react"
import styled from "@emotion/styled"
import LogoImg from "../Atoms/LogoImg"

const defaultProps = {
}

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem 7rem 0 5rem;
`

const Header = () => {
  return (
    <StyledHeader>
        <LogoImg/>
    </StyledHeader>
  )
}

Header.defaultProps = defaultProps
export default Header
