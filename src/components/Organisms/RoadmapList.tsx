import FuturePlans from "../Molecules/FuturePlans";
import Phase from "../Molecules/Phase"
import React from "react"
import phases from "../../data/phaseData"
import planetsBottom from "../../images/planets-bottom.svg"

const RoadmapList = () => {
    const current = phases.find(a => a.current);
    const past = phases.filter(a => !a.current);
    
    return (
        <div>
            <img style={{height: '2500px', width: '1000px', position: 'absolute', left: 0, top: '1000px'}} src={planetsBottom} />
            {current && <Phase data={current} />}
            <FuturePlans />
            <h1 style={{textAlign: 'left'}}>Completed phases</h1>
            {past && past.map((data, idx) => (<Phase key={idx} idx={idx} data={data}/>))}
        </div>
  )
}

export default RoadmapList
