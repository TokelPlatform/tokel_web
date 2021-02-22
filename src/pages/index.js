import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import Functionality from "../components/Organisms/Functionality"
import Features from "../components/Organisms/Features"
import Footer from "../components/Organisms/Footer"
import Stars from "../components/Atoms/Stars"
import breakpoints from "../styles/breakpoints"
import WelcomeText from "../components/Molecules/WelcomeText"

const MainPage = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
  height: 100vh;
  @media (max-width: ${breakpoints.mobile}) {
    height: 35rem;
  }
`
const Dashboard = css`
  margin: auto;
  margin-top: -20rem;
  max-width: 900px;
  @media (max-width: ${breakpoints.smallScreen}) {
    margin-top: -18rem;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: -17rem;
  }
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
      <WelcomeText />
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
