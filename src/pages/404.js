import * as React from "react"

import { Link, graphql } from "gatsby"

import Img from "gatsby-image"
import PageRoot from './template';
import PropTypes from 'prop-types'
import styled from "@emotion/styled"

const ImageWrapper = styled.div`
  width: 350px;
  padding: 2rem 0;
`

const PageContent = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-size: 50px;
  }
  h2 {
    color: white;
    font-size: 30px;
    text-align: center;

  }
`

const NotFoundPage = ({data}) => {
  return (
    <PageRoot>
        <PageContent>
          <title>Not found</title>
          <h1>404</h1>
          <h2>The page was lost in space.</h2>
          <h3>
            <Link to="/">Home</Link>
          </h3>
          <ImageWrapper>
            <Img alt="satelite" fluid={data.satelite.childImageSharp.fluid}></Img>
          </ImageWrapper>
        </PageContent>
    </PageRoot>
  )
}

export const query = graphql`
  query {
    satelite: file(relativePath: { eq: "satelitex2.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 350) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

NotFoundPage.propTypes = {
  data: PropTypes.any
}
export default NotFoundPage
