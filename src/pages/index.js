import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import ClickableIcon from "../components/Atoms/ClickableIcon"
import icons from "../data/icons"
import links from "../data/links"
import Header from "../components/Molecules/Header"
import LogoText from "../components/Atoms/LogoText"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import PropTypes from 'prop-types';
import Functionality from "../components/Organisms/Functionality"
import Features from "../components/Organisms/Features"
import Footer from "../components/Organisms/Footer"
import Stars from "../components/Atoms/Stars"
import breakpoints from "../styles/breakpoints"

const MainPage = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
  height: 100vh;
  @media (max-width: ${breakpoints.mobile}) {
    height: 35rem;
  }
`
const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: ${breakpoints.mobile}) {
    height: 35rem;
  }
`

const Title = styled.h1`
  color: var(--color-almostWhite);
  font-family: var(--font-family-primary);
  margin-top: 3rem;
  font-weight: 400;
  & > a {
    margin: 0 0.5rem 0 0.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: var(--font-size-h2);
    font-weigth: 400;
    margin-top: 1rem;
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

const Dashboard = css`
  margin: auto;
  margin-top: -20rem;
  max-width: 900px;
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: -10rem;
  }
`

const IndexPage = ({data})  => {
  return (
    <MainPage>
      <Stars starSize={'small'} />
      <Stars starSize={'medium'}/>
      <Stars starSize={'big'}/>
      <Header />
      <WelcomeText>
        <LogoText/>
        <Title>Komodo ecosystem’s Token Platform.</Title>        
        <Links>        
          <ClickableIcon link={links.github} />
          <ClickableIcon icon={icons.discord} link={links.discord} />
        </Links>
      </WelcomeText>
      <Img css={Dashboard} fluid={data.dash.childImageSharp.fluid}></Img>
      <Functionality />
      <Features />
      <Footer />
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
