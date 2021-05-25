import { SubTitle, Title } from "../Atoms/Title"

import LogoImg from "../Atoms/LogoImg"
import React from "react"
import breakpoints from "../../styles/breakpoints"
import styled from "@emotion/styled"

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

const WelcomeText = () => {
  return (
      <Container>
        <SubTitle>Introducing TOKEL</SubTitle>
        <Title>A grass roots <br /> t<LogoImg width="50px"></LogoImg>ken platform</Title>
      </Container>
  )
}

WelcomeText.defaultProps = defaultProps
export default WelcomeText
