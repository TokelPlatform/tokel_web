import React from "react"
import styled from "@emotion/styled"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {tabs} from "../../data/constants"
import links from "../../data/links"
import darkHeart from "../../images/icons/icon_heart_dark.svg"
import functionalityData from "../../data/functionalityData"
import breakpoints from "../../styles/breakpoints"

const defaultProps = {
  openTab: tabs.TRADE,
  hiddenParts: false
}

type FunctionalityProps = {
  openTab: string,
  hiddenParts: boolean

}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1150px;
    width: 100%;
    height: 42rem;
    background-color: rgb(184, 188, 221, 0.1);
    p {
        opacity: 0.8;
        text-align: left;
        width: 470px;
    }
    margin-top: 2rem;
    padding-top: 3rem;
    margin-bottom: 5rem;
    @media (max-width: ${breakpoints.mobilebig}) {
      background-color: transparent;
    }
`
const ImageWrapper = styled.div`
    width: 470px;
    margin-top: 1rem;
`

const ArtImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 470px;
    margin-top: 32px; 
    @media (max-width: ${breakpoints.mobilebig}) {
      justify-content: center;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 470px;

    h1 {
        text-transform: uppercase;
    }
`

const ArtSource = styled.a`
    opacity: 0.3;
    color: var(--color-darkBlue);
    font-size: 0.625rem;
    margin-top: 0.25rem;
`

const ImageWithSource = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => props.hidden ? `
      display: none; 
      margin: auto;` 
      : ''}

`

const HeartImage = styled.img`
    height: 80px;
    margin: 50px 0 30px 0;
    z-index: 10;
`

const FunctionalityPreview = ({openTab, hiddenParts}: FunctionalityProps) => {
  return (
    <StaticQuery
      query={graphql`
      query {
        swap: file(relativePath: { eq: "swap.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 570) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        lady: file(relativePath: { eq: "art-lady.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 240) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        fox: file(relativePath: { eq: "art-fox.png" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 165) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
        }          
      }
      `}
      render={data => (
        <Container>
            {openTab === tabs.TRADE &&         
                <Card>
                    <h1>{functionalityData.dex.title}</h1>
                    <h2>{functionalityData.dex.subtitle}</h2>
                    <p>{functionalityData.dex.desc}</p>
                    <ImageWrapper>
                        <Img fluid={data.swap.childImageSharp.fluid}></Img>
                    </ImageWrapper>
                </Card>
            }
           {openTab === tabs.NFT &&         
                <Card>
                    <h1>{functionalityData.nft.title}</h1>
                    <h2>{functionalityData.nft.subtitle}</h2>
                    <p>{functionalityData.nft.desc}</p>
                    <ArtImageWrapper>
                        <ImageWithSource hidden={hiddenParts}>
                            <Img  style={{width: 160, height: 240}} fluid={data.fox.childImageSharp.fluid}></Img>
                            <ArtSource href={links.openseaImage}>Art Source: Opensea.io</ArtSource>
                        </ImageWithSource>
                        <ImageWithSource>
                            <Img style={{width: 240, height: 240}} fluid={data.lady.childImageSharp.fluid}></Img>                        
                            <ArtSource href={links.superrareImage}>Art Source: Superrare.co</ArtSource>
                        </ImageWithSource>
                    </ArtImageWrapper>
                </Card>
            }            
           {openTab === tabs.TOKENS &&         
                <Card>
                    <h1>{functionalityData.tokens.title}</h1>
                    <HeartImage src={darkHeart}></HeartImage>
                    <h2>{functionalityData.tokens.subtitle}</h2>
                    <p>{functionalityData.tokens.desc}</p>
                    </Card>
            }             
        </Container>
      )}
    />
  )
}


FunctionalityPreview.defaultProps = defaultProps
export default FunctionalityPreview
