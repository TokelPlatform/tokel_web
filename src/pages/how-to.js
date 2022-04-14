import * as React from "react"

import Img from 'gatsby-image'
import PageRootContainer from "./template"
import PropTypes from 'prop-types'
import breakpoints from "../styles/breakpoints"
import { graphql } from "gatsby"
import styled from '@emotion/styled'
import PageMeta from "components/Molecules/PageMeta"
import sections from "data/howToPageData"

const HowToRoot = styled.div`
    padding: 50px 50px 150px 50px;
    h1 {
        margin-top: 150px;
        text-align: center;
        @media (max-width: ${breakpoints.tablet}) {
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
    text-align: center;
    opacity: 0.8;
`

const Options = styled.div`
    display: flex;
    flex-direction: row;
    align-content: space-between;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;
    @media (max-width: ${breakpoints.mobile}) {    
        flex-direction: column;
    }
`

const OptionWrapper = styled.div`
    max-width: 400px;
    text-align: center;
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
      <PageMeta
        title="How to use the Tokel blockchain | Tokel Platform"
        description="The Tokel application supports the TKL coin wallet. All features are currently accessible directly on the blockchain via terminal commands."
        />
        <HowToRoot>
            <h1>How to use Tokel blockchain</h1>
            <Disclaimer>DISCLAIMER <br/>The Tokel application currently supports: TKL coin wallet, Token wallet, Token Creation Tool.
             Token DEX is currently only accessible directly on the blockchain via terminal.</Disclaimer>
             <Options>
               {sections.map(section => (
                  <OptionWrapper key={section.title}>
                    <h4>{section.title}<br/>{section.subtitle}</h4>
                    <ImgWrapper>
                      <Img alt={section.imageAlt} fluid={data[section.image].childImageSharp.fluid}></Img>
                    </ImgWrapper>
                    {section.links.map(link => (
                      <div key={link.urlName}>
                        <h5><a href={link.url}>{link.urlName}</a></h5>
                      </div>
                    ))}
                </OptionWrapper>
               ))}
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
