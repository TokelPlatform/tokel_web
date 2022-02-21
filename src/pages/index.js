import * as React from "react"

import Comparison from "../components/Organisms/Comparison"
import { Helmet } from "react-helmet"
import PageBreaker1 from "../components/Molecules/PageBreaker1"
import PageRoot from "./template"
import PropTypes from 'prop-types'
import WelcomeText from "../components/Molecules/WelcomeText"
import breakpoints from "../styles/breakpoints"
import styled from "@emotion/styled"
import UseCases from "components/Organisms/UseCases"
import Feature from "components/Molecules/Feature"
import easytouse from 'images/features/easytouse.svg'
import FeatureWithLinks from "components/Molecules/FeatureWithLinks"
import nspv from 'images/features/nspv.svg'

const MainPage = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
  height: 120vh;
  @media (max-width: ${breakpoints.mobile}) {
    height: 35rem;
  }
`

const Features = styled.div`
  // margin: 0 20rem;
`

const IndexPage = ()  => {
  return (
    <MainPage>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Tokel | Making NFT & Token Creation Easy For Everyone</title>
          <meta name="description" content="Tokel truly opens the door for every single person to create & access tokens and NFTs in an inexpensive, decentralized fashion." />
      </Helmet>
      <PageRoot starsTop='4000px'>
        <WelcomeText />
        <PageBreaker1 />
        <Comparison />
        <UseCases />
        <Features>
          <Feature 
          title="Tokel is Easy to Use"
          subtitle="Created with people in mind"
          desc="We are focusing on bringing simple, easy to use blockchain technology to everybody, in an inexclusive, inexpensive way."
          image={easytouse}
          />
          <FeatureWithLinks 
            title="Truly Decentralized Technology"
            subtitle="nSPV - Super Light Client"
            desc="Over 100x quicker, lighter & actually decentralized when compared to SPV servers."
            image={nspv}
          />
        </Features>
       
      </PageRoot>

    </MainPage>
  )
}

IndexPage.propTypes = {
  data: PropTypes.any
}
export default IndexPage
