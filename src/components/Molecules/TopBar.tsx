import ClickableIcon from "../Atoms/ClickableIcon"
import LogoText from "../Atoms/LogoText"
import Menu from "./Menu"
import React from "react"
import icons from "../../data/icons"
import links from "../../data/links"
import styled from "@emotion/styled"

const TopBarRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 3rem;
  padding-left: 2rem;
`

const TopBar = () => {
  return (
    <TopBarRoot>
        <LogoText/>
        <Menu />
        <div style={{width: '6rem'}}>
            <ClickableIcon icon={icons.discord} link={links.discord} />
        </div>
  </TopBarRoot>
  )
}

export default TopBar
