import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import Stars from "../components/Atoms/Stars"
import LogoText from "../components/Atoms/LogoText"
import Footer from "../components/Organisms/Footer"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import breakpoints from "../styles/breakpoints"

const Container = styled.div`
  margin: auto;
  text-align: center;
  padding-top: 17rem;
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
  @media (max-width: ${breakpoints.mobilemiddle}) {
      height: 300px;
  }
  @media (max-width: ${breakpoints.mobile}) {
      height: 200px;
  }
`

const DevelopmentRoadmapWrapper = styled.div`
    max-height:100%;
    height: 792px;
    padding-bottom: 8rem;
    // padding-top: 5rem;
    @media (max-width: ${breakpoints.tablet}) {
        height: 500px;
    }
    @media (max-width: ${breakpoints.mobilebig}) {
        height: 400px;
    }
    @media (max-width: ${breakpoints.mobile}) {
        height: 250px;
    }
`

const ProjectRoadMap = styled.h1`
    margin-bottom: 10rem;
    margin-top: 3rem;
    @media (max-width: ${breakpoints.mobilebig}) {
        margin-bottom: 5rem;
        margin-top: 2rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: var(--font-size-h2);
  }
`
const DevelopmentRoadMap = styled.h1`
    margin-top: 12rem;
    margin-bottom: 4rem;
    @media (max-width: ${breakpoints.mobilebig}) {
        margin-top: 5rem;
        margin-bottom: 4rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: var(--font-size-h2);
  }
`
const RoadMapContainer = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
  padding-top: 3rem;
`

const linkToHome = css`
  color: var(--color-almostWhite); 
  opacity: 0.7; 
  margin-left: 3rem;
  &:hover {
    opacity: 1;
  }
`

export default function Roadmap({data}) {
  return (
    <div>
      <RoadMapContainer>         
        <Link css={linkToHome} to="/">Back to Homepage</Link>   
        <Stars starSize={'small'} />
        <Stars starSize={'medium'}/>
        <Stars starSize={'big'}/>
        <Container>
            <LogoText/>
            <ProjectRoadMap>Project Roadmap 2021</ProjectRoadMap>
            <ProjectTimelineWrapper>
                <Img  
                    imgStyle={{ objectFit: "contain" }} 
                    style={{maxHeight: "100%"}} 
                    fluid={data.timeline.childImageSharp.fluid}
                />
            </ProjectTimelineWrapper>
            <DevelopmentRoadMap>DEVELOPMENT ROADMAP 2021</DevelopmentRoadMap>
            <DevelopmentRoadmapWrapper>
                <Img 
                    imgStyle={{ objectFit: "contain" }} 
                    style={{maxHeight: "100%"}}
                    fluid={data.devTimeline.childImageSharp.fluid}
                />
            </DevelopmentRoadmapWrapper>
        </Container>
        </RoadMapContainer>
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