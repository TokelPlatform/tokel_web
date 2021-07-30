import Footer from "../components/Organisms/Footer"
import LogoImg from "../components/Atoms/LogoImg"
import PropTypes from 'prop-types'
import React from "react"
import RoadmapList from "../components/Organisms/RoadmapList"
import Stars from "../components/Atoms/Stars"
import { Title } from "../components/Atoms/Title"
import TopBar from "../components/Molecules/TopBar"
import breakpoints from "../styles/breakpoints"
import { graphql } from "gatsby"
import planetsTop from '../images/planets-top.svg'
import styled from "@emotion/styled"

const RoadmapWrapper = styled.div`
  margin: auto;
  text-align: center;
  padding: 17rem 12rem 5rem 12rem;
  
  @media (max-width: ${breakpoints.roadmap.breakpoint2}) {
    padding: 12rem 6rem 5rem 6rem;
  }

  @media (max-width: ${breakpoints.roadmap.breakpoint3}) {
    padding: 0 2rem 5rem 2rem;
  }
  @media (max-width: ${breakpoints.roadmap.breakpoint4}) {
    padding: 0 1rem 3rem 1rem;
  }
  
  h1 {
      color: var(--color-lightBlue);
      text-transform: uppercase;
  }
  p {
      color: var(--color-lightBlue);
  }
`


const RoadMapContainer = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
`

const TopPlanets = styled.img`
  height: 555px;
  width: 370px;
  position: absolute;
  right: 0;
  top: -10px;
  @media (max-width: ${breakpoints.roadmap.breakpoint3}) {
    top: -100px;
    height: 455px;
    width: 270px;
  }
`

export default function Roadmap() {
  return (
    <div>
      <RoadMapContainer>         
        <TopBar />  
        <Stars starSize={'small'} top='3700px' />
        <Stars starSize={'medium'} top='3700px'/>
        <Stars starSize={'big'} top='3700px'/>
        <RoadmapWrapper>
          <TopPlanets src={planetsTop} />
          <Title style={{textAlign: "left"}}>R<LogoImg width="42px"></LogoImg>admap</Title>
          <RoadmapList style={{marginTop: '12rem'}}/>
        </RoadmapWrapper>
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