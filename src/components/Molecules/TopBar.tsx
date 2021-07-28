import ClickableIcon from "../Atoms/ClickableIcon"
import LogoText from "../Atoms/LogoText"
import Navigation from "./Navigation"
import React from "react"
import breakpoints from "../../styles/breakpoints"
import icons from "../../data/icons"
import links from "../../data/links"
import styled from "@emotion/styled"

const TopBarRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 3rem;
  padding-left: 2rem;
`

const IconWrapper = styled.div`
  width: 6rem;
  @media (max-width: ${breakpoints.mobilebig}) {
    display: none;
  }
`

const TopBar = () => {
  return (
    <TopBarRoot>
        <LogoText/>
        <Navigation />
        <IconWrapper>
            <ClickableIcon icon={icons.discord} link={links.discord} />
        </IconWrapper>
  </TopBarRoot>
  )
}

export default TopBar
