import ExchangesRoot from './template'
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import { PageHeader } from "../components/Atoms/Title"
import PropTypes from 'prop-types'
import React from "react"
import breakpoints from "../styles/breakpoints"
import flyingTokel from '../images/launch/flying-tokel.svg'
import { graphql } from "gatsby"
import links from '../data/links'
import planetsOrbits from '../images/launch/planets-orbits.svg'
import styled from "@emotion/styled"

const ChainLaunchWrapper = styled.div`
`

const TokelQuestionsWrapper = styled.div`
  background-image: url(${planetsOrbits});
  background-repeat: no-repeat;
  background-position: center 1070px;
  padding: 0;
  margin: 0;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px;
  }  
`
const WhyTokel = styled.div`
  display: grid;
  grid-gap: 50px;
  padding-top: 150px;
  max-width: 540px;
  margin: auto;
  @media (max-width: ${breakpoints.mobile}) {  
    padding-top: 50px;
  }  
`

const Contact = styled.div`
  text-align: center;
  padding: 50px 0 50px 0;
  h3 {
    font-size: 26px;
    color: white;
    line-height: 36px;
  }
`

export default function Exchanges({data}) {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Exchanges | Tokel Platform </title>
          <meta name="description" content="With the Tokel App you can sell art, browse NFTs, create and trade tokens for your projects. All on a unified and inexpensive platform." />
      </Helmet>
      <ExchangesRoot starsTop='400px'> 
        <ChainLaunchWrapper> 
        <TokelQuestionsWrapper>
          <WhyTokel>
            <PageHeader>Exchanges</PageHeader>
            <a href={links.atomicDex}><Img fluid={data.atomic.childImageSharp.fluid}></Img></a>
            <a href={links.dexTrade}><Img fluid={data.dex.childImageSharp.fluid}></Img></a>
          </WhyTokel>
          <Contact>
            <h3>Contact us at <a href="mailto:contact@tokel.io">contact@tokel.io</a> or join <a href="https://discord.gg/SQzdUQWXrn">Tokel Discord</a> </h3>
            <img src={flyingTokel}></img>
          </Contact>
        </TokelQuestionsWrapper>
        </ChainLaunchWrapper> 
      </ExchangesRoot>
    </div>
  )
}

export const query = graphql`
  query {
    atomic: file(relativePath: { eq: "exch_atomicdex.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 420) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    dex: file(relativePath: { eq: "exch_dextrade.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 420) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
  }
`

Exchanges.propTypes = {
    data: PropTypes.any
  }