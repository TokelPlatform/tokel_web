import React from "react"
import styled from "@emotion/styled"
import Title from "../Atoms/Title"
import LogoText from "../Atoms/LogoText"
import ClickableIcon from "../Atoms/ClickableIcon"
import icons from "../../data/icons"
import links from "../../data/links"
import breakpoints from "../../styles/breakpoints"

const defaultProps = {
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: ${breakpoints.mobile}) {
    height: 35rem;
  }
`
const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > a {
    margin: 0 0.5rem 0 0.5rem;
  }
`
const Roadmap = styled.a`
    color: var(--color-almostWhite);
    margin-top: 0.5rem;
    will-change: transform;
    transition: transform .5s ease;
    &:hover {
      transform: scale(1.3);
      color: var(--color-purple);
    }

`

const WelcomeText = () => {
  return (
      <Container>
        <LogoText/>
        <Title>Komodo ecosystem’s Token Platform.</Title>        
        <Links>        
          <ClickableIcon link={links.github} />
          <ClickableIcon icon={icons.discord} link={links.discord} />
          <ClickableIcon icon={icons.document} link={links.whitepaper} />          
        </Links>
        <Roadmap href="/roadmap">Project Roadmap 2021</Roadmap>
      </Container>
  )
}

WelcomeText.defaultProps = defaultProps
export default WelcomeText
