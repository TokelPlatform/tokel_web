import { Helmet } from "react-helmet"
import { PageHeader } from "../components/Atoms/Title"
import PropTypes from 'prop-types'
import React from "react"
import RoadmapList from "../components/Organisms/RoadmapList"
import RoadmapRoot from './template'
import breakpoints from "../styles/breakpoints"
import planetsTop from '../images/planets-top.svg'
import styled from "@emotion/styled"

const RoadmapWrapper = styled.div`
  margin: auto;
  text-align: center;
  padding: 9rem 12rem 5rem 12rem;
  
  @media (max-width: ${breakpoints.roadmap.breakpoint2}) {
    padding: 12rem 6rem 5rem 6rem;
  }

  @media (max-width: ${breakpoints.roadmap.breakpoint3}) {
    padding: 0 2rem 5rem 2rem;
  }
  @media (max-width: ${breakpoints.roadmap.breakpoint4}) {
    padding: 0 1rem 3rem 1rem;
  }
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Project Roadmap 2021 - 2022 | Tokel Platform</title>
          <meta name="description" content="A complete roadmap of the Tokel Platform project to showcase the development plans and goals for the next 2 years." />
       </Helmet>
      <RoadmapRoot starsTop='3700px'>
        <RoadmapWrapper>
          <TopPlanets src={planetsTop} />
          <PageHeader>Roadmap</PageHeader>
          <RoadmapList style={{marginTop: '12rem'}}/>
        </RoadmapWrapper>
      </RoadmapRoot>
    </div>
  )
}

Roadmap.propTypes = {
    data: PropTypes.any
  }