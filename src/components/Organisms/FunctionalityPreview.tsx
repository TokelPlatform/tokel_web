import React from "react"
import styled from "@emotion/styled"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const defaultProps = {
}

const Container = styled.header`
    max-width: 1150px;
    width: 100%;
    height: 800px;
    background-color: rgb(184, 188, 221, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        opacity: 0.8;
        width: 600px;
        text-align: center;
    }
    margin-top: 70px;
`
const ImageWrapper = styled.div`
    width: 570px;
    margin-top: 36px;
`

const FunctionalityPreview = () => {
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
      }
      `}
      render={data => (
        <Container>
        <h1>TOKEN DEX</h1>
            <h2>Swap tokens easily using TOKEL’s DEX</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
            <ImageWrapper>
                <Img fluid={data.swap.childImageSharp.fluid}></Img>
            </ImageWrapper>
        </Container>
      )}
    />
  )
}


FunctionalityPreview.defaultProps = defaultProps
export default FunctionalityPreview
