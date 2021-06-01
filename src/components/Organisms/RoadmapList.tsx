import FuturePlans from "../Molecules/FuturePlans";
import Phase from "../Molecules/Phase"
import React from "react"
import breakpoints from "../../styles/breakpoints";
import phases from "../../data/phaseData"
import planetsBottom from "../../images/planets-bottom.svg"
import styled from "@emotion/styled";

const BottomPlanets = styled.img`
    height: 300vh; 
    width: 900px; 
    position: absolute;
    left: 0;
    top: 800px;
    @media (max-width: ${breakpoints.roadmap.breakpoint2}) {
        /* display: none; */
        width: ${breakpoints.roadmap.breakpoint3};
        top: 600px;
    }
    @media (max-width: ${breakpoints.roadmap.breakpoint3}) {
        /* display: none; */
        width: ${breakpoints.roadmap.breakpoint4};
        top: 250px;
    }
    @media (max-width: ${breakpoints.roadmap.breakpoint4}) {
        /* display: none; */
        width: 360px;
        top: 700px;
    }
` 

const RoadmapList = () => {
    const current = phases.find(a => a.current);
    const past = phases.filter(a => !a.current);
    
    return (
        <div>
            <BottomPlanets src={planetsBottom} />
            {current && <Phase data={current} />}
            <FuturePlans />
            <h1 style={{textAlign: 'left', marginBottom: 0}}>Completed phases</h1>
            {past && past.map((data, idx) => (<Phase key={idx} idx={idx} data={data}/>))}
        </div>
  )
}

export default RoadmapList
