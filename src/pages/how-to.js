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
            <Disclaimer>DISCLAIMER <br/>The Tokel application currently supports: TKL coin wallet, Token wallet, Token Creation Tool.
             Token DEX is currently only accessible directly on the blockchain via terminal.</Disclaimer>
            <Options>
                <OptionWrapper>
                    <h4>For all users: <br/>Tokel All-in-one Application</h4>
                    <ImgWrapper>
                      <Img alt="all-users-screen"  fluid={data.app.childImageSharp.fluid}></Img>
                    </ImgWrapper>
                    <h5><a href={links.github_release_page}>Download latest release (Desktop)</a></h5>
                </OptionWrapper>
                <OptionWrapper>
                    <div>
                      <h4>For tech savvy or curious: <br/>Cli interface </h4>
                      <ImgWrapper>
                        <Img alt="tech-savvy-screen"  fluid={data.cli.childImageSharp.fluid}></Img>
                      </ImgWrapper>
                    </div>
                    <h5><a href={links.documentationChain + 'guides/LaunchTheChain/'}>Run Tokel blockchain</a></h5>
                    <h5><a href={links.documentationCreateTokenNFT}>Create your tokens/NFTs</a></h5>
                    <h5><a href={links.documentationChain + '/api/assets/#introduction/'}>Use the tokenDEX</a></h5>
                </OptionWrapper>
            </Options>
            <Options>
                <OptionWrapper>
                    <h4>For all users: <br/>Tokel Documenation</h4>
                    <ImgWrapper>
                      <Img alt="users-screen" fluid={data.docs.childImageSharp.fluid}></Img>
                    </ImgWrapper>
                    <h5><a href={links.documentationChain + '#what-is-the-tokel-platform'}>What is the Tokel Platform?</a></h5>
                    <h5><a href={links.documentationChain + '#tokel-blockchain-specifics'}>Tokel Blockchain Specifics</a></h5>
                    <h5><a href={links.documentationChain + 'guides/FindYourPubkey/'}>Find your pubkey to receive tokens</a></h5>
                </OptionWrapper>
                <OptionWrapper>
                    <div>
                      <h4>For developers: <br/>Nspv-js</h4>
                      <ImgWrapper>
                        <Img alt="developers-screen" fluid={data.nspv.childImageSharp.fluid}></Img>
                      </ImgWrapper>
                    </div>
                    <h5><a href={links.github_nspv + '#why-nspv'}>Why Nspv-js?</a></h5>
                    <h5><a href={links.github_nspv + '#prerequisites'}>Installation Prerequisites</a></h5>
                    <h5><a href={links.github_nspv + '/blob/development/API.md'}>Nspv-js API</a></h5>
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
    docs: file(relativePath: { eq: "howto/docs.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    nspv: file(relativePath: { eq: "howto/nspv.png" }) {
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
