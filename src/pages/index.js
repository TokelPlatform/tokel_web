import * as React from "react"

import Features from "../components/Organisms/Features"
import Footer from "../components/Organisms/Footer"
import Functionality from "../components/Organisms/Functionality"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import Stars from "../components/Atoms/Stars"
import TopBar from "../components/Molecules/TopBar"
import WelcomeText from "../components/Molecules/WelcomeText"
import breakpoints from "../styles/breakpoints"
import { css } from "@emotion/react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

const MainPage = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
  height: 120vh;
  @media (max-width: ${breakpoints.mobile}) {
    height: 35rem;
  }
`
const Dashboard = css`
  margin: auto;
  max-width: 900px;
`

const Preview = styled.a`
  &:hover {
    opacity: 1
  }
`

const IndexPage = ({data})  => {
  return (
    <MainPage>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Tokel | Making NFT & Token Creation Easy For Everyone</title>
          <meta name="description" content="Tokel truly opens the door for every single person to create & access tokens and NFTs in an inexpensive, decentralized fashion." />
      </Helmet>
      <TopBar />
      <Stars starSize={'small'} />
      <Stars starSize={'medium'}/>
      <Stars starSize={'big'}/>
      <WelcomeText />
      <Preview href='https://www.youtube.com/watch?v=dZikw30vO2U'>
        <Img css={Dashboard} fluid={data.dash.childImageSharp.fluid}></Img>
      </Preview>
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
