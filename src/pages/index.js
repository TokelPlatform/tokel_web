import * as React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ClickableIcon from "../components/Atoms/ClickableIcon"
import icons from "../data/icons"
import links from "../data/links"
import Header from "../components/Molecules/Header"

const MainPage = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
  height: 100vh;
`
const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Title = styled.h1`
  color: var(--color-almostWhite);
  font-family: var(--font-family-primary);
  margin-top: 3rem;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

// markup
const IndexPage = ({data}) => {
  return (
    <MainPage>
        
      <Header />
      <WelcomeText>
        <Img fixed={data.logo.childImageSharp.fixed}></Img>
        <Title>Komodo ecosystem’s Token Platform.</Title>        <Links>        
          <ClickableIcon link={links.github} />
          <ClickableIcon icon={icons.discord} link={links.discord} />
        </Links>
      </WelcomeText>
    </MainPage>
  )
}


export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo-text.png" }) {
      childImageSharp {
        fixed(quality: 100, width: 200, height: 60) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
export default IndexPage
