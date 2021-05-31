import React from "react"
import futurePlans from "../../data/futurePlans"
import styled from "@emotion/styled"

const FuturePlansRoot = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 1rem 0 12rem 0;
 
`

const PlanWrapper = styled.div`
    max-width: 320px;
    text-align: left;
    h3 {
        color: var(--color-almostWhite);
    }
    /* margin: 1rem 2rem; */
`

const PlanContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    justify-content: space-between;
    align-content: center;
`

const FuturePlans = () => {
  return (
    <FuturePlansRoot>
        <h1 style={{marginBottom: '4rem'}}>Future plans</h1>
        <PlanContainer>
            {futurePlans.map((plan,idx) => (
                <PlanWrapper key={idx}>
                    <h3>{plan.title}</h3>
                    <p>{plan.description}</p>
                </PlanWrapper>
            ))}
        </PlanContainer>
    </FuturePlansRoot>
  )
}

export default FuturePlans
