import * as React from "react"

import Comparison from "components/Organisms/Comparison"
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
import {  VSpacerBig } from "styles/common"
import { FlexRowCenter } from "styles/common"
// import BannerSubscribe from "components/Molecules/banners/BannerSubscribe"
import { FlexCol } from "styles/common"
import partnersBg from "images/backgrounds/partners.svg"
import PageMeta from "components/Molecules/PageMeta"

const MainPage = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
  height: 120vh;
  @media (max-width: ${breakpoints.mobile}) {
    height: 35rem;
  }
`

const PartnersSection = styled(FlexCol)`
  padding-top: 10rem;
  background: url(${partnersBg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 0;
  }
`

const IndexPage = ()  => {
  return (
    <MainPage>
      <PageMeta
        title="Tokel | Making NFT & Token Creation Easy For Everyone"
        description="Tokel truly opens the door for every single person to create & access tokens and NFTs in an inexpensive, decentralized fashion."
      />
      <PageRoot starsTop='8000px'>
        <WelcomeText />
        <VSpacerBig/>
        <div id="compare"/>
        <Comparison />
        <UseCases />
        <Features />
        <Ecosystem />
        <PartnersSection>
          <SectionList title="Our Partners" data={partnersData}/>
          <SectionList id="buy-tkl" title="Buy Tokel on" data={exchangeData}/>
        </PartnersSection>
        <FlexRowCenter>
          <h4 style={{textAlign: 'center', padding: '0 2rem'}}>Tokel will soon be also available through direct swaps</h4>
        </FlexRowCenter>
        {/* <BannerSubscribe /> */}
      </PageRoot>
    </MainPage>
  )
}

IndexPage.propTypes = {
  data: PropTypes.any
}
export default IndexPage
