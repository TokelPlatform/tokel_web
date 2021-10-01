import * as React from "react"

import { Helmet } from "react-helmet"
import Img from 'gatsby-image'
import PageRootContainer from "./template"
import PropTypes from 'prop-types'
import breakpoints from "../styles/breakpoints"
import { graphql } from "gatsby"
import links from "../data/links"
import styled from '@emotion/styled'

const HowToRoot = styled.div`
    padding: 50px 50px 150px 50px;
    h1 {
        margin-top: 150px;
        font-size: 50px;
        line-height: 55px;
        text-align: center;
        color: var(--color-almostWhite);
        @media (max-width: ${breakpoints.tablet}) {
            font-size: 40px;
            line-height: 45px;
            margin-top: 50px;
        }
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 30px;
            line-height: 35px;
            margin-top: 50px;
        }      
      @media (max-width: ${breakpoints.mobile}) {
        padding: 20px;
      }   
    }
`
const Disclaimer = styled.p`
    max-width: 550px;
    margin: auto;
    color: var(--color-almostWhite);
    text-align: center;
    opacity: 0.8;
`

const Options = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    @media (max-width: ${breakpoints.mobile}) {    
        flex-direction: column;
    }  

`

const OptionWrapper = styled.div`
    max-width: 400px;
    text-align: center;
    h2 {
        font-size: 30px;
        line-height: 35px;
        color: var(--color-almostWhite);
        font-weight: 400;
        @media (max-width: ${breakpoints.tablet}) {
            font-size: 20px;
            line-height: 25px;
        }
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 18px;
            line-height: 28px;
        }  

    }
`

const ImgWrapper = styled.div`
  width: 400px;
  margin: auto;
  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 70vw;
  }
`

const HowTo = ({data})  => {
  return (
    <PageRootContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>How to use the Tokel blockchain | Tokel Platform </title>
          <meta name="description" content="The Tokel application supports the TKL coin wallet. All features are currently accessible directly on the blockchain via terminal commands." />
      </Helmet>
        <HowToRoot>
            <h1>How to use Tokel blockchain</h1>
            <Disclaimer>DISCLAIMER <br/>The Tokel application currently only supports the TKL coin wallet. Other GUI features such as: a token wallet, a token creation tool, an NFT marketplace, token DEX are under development. All of these features are currently accessible directly on the blockchain via terminal commands.</Disclaimer>
            <Options>
                <OptionWrapper>
                    <h2>For all users: <br/>Tokel All-in-one Application</h2>
                    <ImgWrapper>
                      <Img fluid={data.app.childImageSharp.fluid}></Img>
                    </ImgWrapper>
                    <h3><a href={links.github_release_page}>Download latest release (Desktop)</a></h3>
                </OptionWrapper>
                <OptionWrapper>
                    <div>
                      <h2>For tech savvy or curious: <br/>Cli interface </h2>
                      <ImgWrapper>
                        <Img fluid={data.cli.childImageSharp.fluid}></Img>
                      </ImgWrapper>
                    </div>
                    <h3><a href={links.documentationChain + 'guides/LaunchTheChain/'}>Run Tokel blockchain</a></h3>
                    <h3><a href={links.documentationCreateTokenNFT}>Create your tokens/NFTs</a></h3>
                    <h3><a href={links.documentationChain + '/api/assets/#introduction/'}>Use the tokenDEX</a></h3>
                </OptionWrapper>
            </Options>
        </HowToRoot>
    </PageRootContainer>
  )
}
export const query = graphql`
  query {
    app: file(relativePath: { eq: "howto/app.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cli: file(relativePath: { eq: "howto/cli.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
  }
`
HowTo.propTypes = {
  data: PropTypes.any
}
export default HowTo
