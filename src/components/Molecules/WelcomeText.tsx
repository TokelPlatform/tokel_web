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
  padding-bottom: 2rem;
  justify-content: center;
  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 0;
  }
`

const Download = styled.div`
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }    
`

const WelcomeText = () => {
  return (
      <Container>
        <SubTitle className="subtitle">Introducing TOKEL</SubTitle>
        <Title>A grass roots  <br />t<LogoImg mobileWidth="25px" width="45px"></LogoImg>ken  platform</Title>
        <Download>
          <VSpacerBig />
          <a href={links.github_release_page}><Button theme={Colors.PURPLE} text="Download v 1.0.0" width="240px"></Button></a>
          <p style={{textAlign: 'center', color: 'var(--color-gray)'}}>Currently Desktop only</p>
        </Download>
      </Container>
  )
}

WelcomeText.defaultProps = defaultProps
export default WelcomeText
