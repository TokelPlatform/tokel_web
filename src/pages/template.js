import * as React from "react"

import Footer from "components/Organisms/Footer"
import Stars from "components/Atoms/Stars"
import TopBar from "components/Organisms/TopBar"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from 'prop-types'

const PageRoot = styled.div`
  background: var(--gradient-deep-sky);
`

const PageRootContainer = ({children})  => {
  return (
      <div>
        <PageRoot>
            <TopBar />
            <Stars starSize={'small'} />
            <Stars starSize={'medium'}/>
            <Stars starSize={'big'}/>
            {children}
        </PageRoot>
         <Footer />
      </div>
  )
}

export const query = graphql`
  query {
    dash: file(relativePath: { eq: "dashboard.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
PageRootContainer.propTypes = {
    children: PropTypes.node,
    starsTop: PropTypes.string
}
export default PageRootContainer
