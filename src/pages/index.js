import * as React from "react"
import styled from "@emotion/styled"
import ClickableIcon from "../components/Atoms/ClickableIcon"
import icons from "../data/icons"
import links from "../data/links"
import Header from "../components/Molecules/Header"
import LogoText from "../components/Atoms/LogoText"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import PropTypes from 'prop-types';

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
  font-weight: 400;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Dashboard = styled.div`
  margin: auto;
  // margin-top: -20rem;
  transform:  translateY(-20rem);
  width: 900px;
`

// markup
const IndexPage = ({data})  => {
  return (
    <MainPage>
      <Header />
      <WelcomeText>
        <LogoText/>
        <Title>Komodo ecosystem’s Token Platform.</Title>        <Links>        
          <ClickableIcon link={links.github} />
          <ClickableIcon icon={icons.discord} link={links.discord} />
        </Links>
      </WelcomeText>
      <Dashboard>
        <Img fluid={data.dash.childImageSharp.fluid}></Img>
      </Dashboard>
    </MainPage>
  )
}

export const query = graphql`
  query {
    dash: file(relativePath: { eq: "dashboard.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
IndexPage.propTypes = {
  data: PropTypes.any
}
export default IndexPage
