import React from "react"
import styled from "@emotion/styled"
// import { css } from "@emotion/react"
import Stars from "../components/Atoms/Stars"
import LogoText from "../components/Atoms/LogoText"
import Footer from "../components/Organisms/Footer"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from 'prop-types'

const Container = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
  height: 300v;
  margin: auto;
  text-align: center;
  padding-top: 15rem;
  padding-left: 2rem;
  padding-right: 2rem;

  h1 {
      color: var(--color-lightBlue);
      text-transform: uppercase;
      text-align: center;
  }
  h3, p {
    color: var(--color-lightBlue);
    width: 300px;
    float:left;
    text-align: center;
  }
`

const ProjectTimelineWrapper = styled.div`
  max-height:100%;
  height: 450px;
`

const DevelopmentRoadmapWrapper = styled.div`
    max-height:100%;
    height: 792px;
    padding-bottom: 2rem;
`


export default function Roadmap({data}) {
  return (
      <div>
        <Container>
            <Stars starSize={'small'} />
            <Stars starSize={'medium'}/>
            <Stars starSize={'big'}/>
            <LogoText/>
            <h1 style={{marginBottom: '10rem', marginTop: '3rem'}}>Project Roadmap 2021</h1>
            <ProjectTimelineWrapper>
                <Img  
                    imgStyle={{ objectFit: "contain" }} 
                    style={{maxHeight: "100%"}} 
                    fluid={data.timeline.childImageSharp.fluid}
                />
            </ProjectTimelineWrapper>
            <h1 style={{marginTop: '12rem', marginBottom: '4rem'}}>DEVELOPMENT ROADMAP 2021</h1>
            <DevelopmentRoadmapWrapper>
                <Img 
                    imgStyle={{ objectFit: "contain" }} 
                    style={{maxHeight: "100%"}}
                    fluid={data.devTimeline.childImageSharp.fluid}
                />
            </DevelopmentRoadmapWrapper>
        </Container>
       <Footer />
     </div>
  )
}

export const query = graphql`
  query {
    timeline: file(relativePath: { eq: "projectRoadmap.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    devTimeline: file(relativePath: { eq: "developmentRoadmap.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }    
  }
`

Roadmap.propTypes = {
    data: PropTypes.any
  }