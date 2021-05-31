import Phase from "../Molecules/Phase"
import React from "react"
import phases from "../../data/phaseData"

const RoadmapList = () => {
    const current = phases.find(a => a.current);
    console.log(current)
    const past = phases.filter(a => !a.current);
    console.log('past', past)
    
    return (
        <div>
            {current && <Phase data={current} />}
            <h1>PAST</h1>
            {past && past.map(data => (<Phase key={data.phase.title} data={data}/>))}
        </div>
  )
}

export default RoadmapList
