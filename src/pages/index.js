import * as React from "react"

import Comparison from "components/Organisms/Comparison"
import { Helmet } from "react-helmet"
import PageRoot from "./template"
import PropTypes from 'prop-types'
import WelcomeText from "components/Molecules/WelcomeText"
import breakpoints from "styles/breakpoints"
import styled from "@emotion/styled"
import UseCases from "components/Organisms/UseCases"
import Features from "components/Organisms/Features"
import Ecosystem from "components/Organisms/Ecosystem"
import SectionList from "components/Molecules/SectionList"
import partnersData from 'data/partnersData'
import exchangeData from 'data/exchangeData'
import { FlexRowCenter, VSpacerBig } from "styles/common"
import BannerSubscribe from "components/Molecules/banners/BannerSubscribe"

const MainPage = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
  height: 120vh;
  @media (max-width: ${breakpoints.mobile}) {
    height: 35rem;
  }
`

const IndexPageRoot = styled(PageRoot)`
  padding-bottom: 10rem;
`

const IndexPage = ()  => {
  return (
    <MainPage>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Tokel | Making NFT & Token Creation Easy For Everyone</title>
          <meta name="description" content="Tokel truly opens the door for every single person to create & access tokens and NFTs in an inexpensive, decentralized fashion." />
      </Helmet>
      <IndexPageRoot starsTop='8000px'>
        <WelcomeText />
        <VSpacerBig/>
        <Comparison />
        <UseCases />
        <Features />
        <Ecosystem />
        <SectionList title="Our Partners" data={partnersData}/>
        <SectionList id="buy-tkl" title="Buy Tokel on" data={exchangeData}/>
        <FlexRowCenter>
          <h4>Tokel will soon be also available through direct swaps</h4>
        </FlexRowCenter>
        <BannerSubscribe />
      </IndexPageRoot>
    </MainPage>
  )
}

IndexPage.propTypes = {
  data: PropTypes.any
}
export default IndexPage
