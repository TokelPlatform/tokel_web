import React from "react"
import SquareLabel from "../Atoms/SquareLabel"
import styled from "@emotion/styled"

const PhaseRoot = styled.div`
  border: 1px solid var(--color-almostWhite);
  box-sizing: border-box;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 30% 70%;
  justify-items: flex-start;
  align-items: flex-start;
  padding: 2.5rem 5rem;
  margin: 10rem 0;
`

const DescriptionWrapper = styled.div`
    text-align: left;
    padding-left: 3rem;
    padding-right: 5rem;
    h3 {
      color: var(--color-lightBlue);
      text-transform: uppercase;
        
    }
`
const Description =styled.p`
    max-width: 500px;
`
type PhaseDetailProp = {
    title: string;
    description: string;
}

export type PhaseProp = {
    current: number;
    phase: {
        title: string;
        label: string;
        timeInformation: string;
    },
    phaseDetails: PhaseDetailProp[]
}

export type Props = {
    data: PhaseProp
}

const Phase = ({data}: Props) => (
    <PhaseRoot>
        <div>
            <h1>{data.phase.title}</h1>
            <SquareLabel text={data.phase.label}></SquareLabel>
            <p>{data.phase.timeInformation}</p>
        </div>
        <DescriptionWrapper>
            {data.phaseDetails.map(detail => {
                return(
                    <div style={{marginBottom: '3rem'}}key={detail.title}>
                        <h3>{detail.title}</h3>
                        <Description>{detail.description}</Description>
                    </div>
                )
            })}

        </DescriptionWrapper>
    </PhaseRoot>
)

export default Phase
