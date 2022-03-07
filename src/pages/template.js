import * as React from "react"

import Footer from "components/Organisms/Footer"
import Stars from "components/Atoms/Stars"
import TopBar from "components/Organisms/TopBar"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from 'prop-types'

const PageRoot = styled.div`
  background: var(--gradient-deep-sky);
  /* Set a specific height
  /* min-height: 500px;  */

  /* Create the parallax scrolling effect */
  /* background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  */
`

const Planets = styled.div`
  background-image: url('/backgrounds/planet1.svg');
`

const PageRootContainer = ({starsTop = '300px', children})  => {
  return (
      <div>
        <PageRoot>
          <Planets>

            <TopBar />
            <Stars top={starsTop} starSize={'small'} />
            <Stars top={starsTop} starSize={'medium'}/>
            <Stars top={starsTop} starSize={'big'}/>
            {children}

          </Planets>
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
    children: React.ReactNode,
    starsTop: PropTypes.string
}
export default PageRootContainer
