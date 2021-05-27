import Button, { Colors } from "../Atoms/Button"
import { SubTitle, Title } from "../Atoms/Title"

import LogoImg from "../Atoms/LogoImg"
import React from "react"
import { VSpacerBig } from "../../styles/common"
import breakpoints from "../../styles/breakpoints"
import links from "../../data/links"
import styled from "@emotion/styled"

const defaultProps = {
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  justify-content: center;
  /* height: 100vh; */
  @media (max-width: ${breakpoints.mobile}) {
    height: 35rem;
  }
`

const WelcomeText = () => {
  return (
      <Container>
        <SubTitle>Introducing TOKEL</SubTitle>
        <Title>A grass roots <br /> t<LogoImg width="50px"></LogoImg>ken platform</Title>
        <VSpacerBig />
        <a href={links.github_release_page}><Button theme={Colors.PURPLE} text="Download v 1.0.0" width="240px"></Button></a>
        <VSpacerBig />
      </Container>
  )
}

WelcomeText.defaultProps = defaultProps
export default WelcomeText
