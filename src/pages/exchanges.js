import Footer from "../components/Organisms/Footer"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import { PageHeader } from "../components/Atoms/Title"
import PropTypes from 'prop-types'
import React from "react"
import Stars from "../components/Atoms/Stars"
import TopBar from "../components/Molecules/TopBar"
import breakpoints from "../styles/breakpoints"
import flyingTokel from '../images/launch/flying-tokel.svg'
import { graphql } from "gatsby"
import links from '../data/links'
import planetsOrbits from '../images/launch/planets-orbits.svg'
import styled from "@emotion/styled"

const ChainLaunchRoot = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%); 
`

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

// const Hightlighted = styled.h3`
//   text-transform: uppercase;
//   margin-bottom: 10px;
//   color: #FBB74D; 
//   font-weight: 700;
//   @media (max-width: ${breakpoints.mobile}) {
//     font-size: 16px;
//   } 
// `

const Contact = styled.div`
  text-align: center;
  padding: 50px 0 50px 0;
  h3 {
    font-size: 26px;
    color: white;
    line-height: 36px;
  }
`

// const WhiteHeader = styled.h2`
//   font-size: 26px;
//   font-family: var(--font-family-secondary);
//   text-transform: uppercase;
//   color: #F0F0F0;
//   margin-bottom: 30px;
//   font-weight: 700;
//   @media (max-width: ${breakpoints.mobile}) {
//     font-size: 20px;
//   }
// `

// const Answer = styled.p`
//   font-family: 'ibm_plex', monospace;
//   font-size: 16px;
//   font-weight: 400;
//   color: white;
//   @media (max-width: ${breakpoints.mobile}) {
//     font-size: 14px;
//   }
// `

// const TokelTokenBenefits = styled.div`
//   padding: 0;
//   margin: 0;
// `

// const FeaturesImage = styled.img`
//   margin-top: 50px;
//   @media (max-width: ${breakpoints.mobile}) {
//     width: 100%;
//   }
// `
export default function Exchanges({data}) {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Excahnges | Tokel Platform </title>
        <meta name="description" content="With the Tokel App you can sell art, browse NFTs, create and trade tokens for your projects. All on a unified and inexpensive platform." />
    </Helmet>
    <ChainLaunchRoot> 
      <ChainLaunchWrapper> 
      <Stars starSize={'small'} top='400px' />
      <Stars starSize={'medium'} top='400px'/>
      <Stars starSize={'big'} top='400px'/>
      <TopBar />  

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
    </ChainLaunchRoot>
      <Footer/>
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