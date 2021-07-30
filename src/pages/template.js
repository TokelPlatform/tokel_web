import * as React from "react"

import Footer from "../components/Organisms/Footer"
import Stars from "../components/Atoms/Stars"
import TopBar from "../components/Molecules/TopBar"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

const PageRoot = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
`

const PageRootContainer = ({children})  => {
  return (
      <div>
        <PageRoot>
            <TopBar />
            <Stars top='300px' starSize={'small'} />
            <Stars top='300px' starSize={'medium'}/>
            <Stars top='300px' starSize={'big'}/>
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
    children: React.ReactNode
}
export default PageRootContainer
