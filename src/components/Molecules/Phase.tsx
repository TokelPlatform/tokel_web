import React from 'react';
import SquareLabel from '../Atoms/SquareLabel';
import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';

type PhaseRootProps = {
  current: number;
  idx: number;
};
const PhaseRoot = styled.div<PhaseRootProps>`
  border: ${props => (props.current ? '1px solid var(--color-almostWhite)' : 'none')};
  background-color: ${props =>
    props.current ? 'none' : props.idx % 2 === 0 ? 'rgba(240, 240, 240, 0.1)' : 'none'};
  box-sizing: border-box;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 30% 70%;
  justify-items: flex-start;
  align-items: flex-start;
  padding: 2.5rem 5rem;
  margin: 5rem 0rem;
  z-index: 1;
  position: relative;
  @media (max-width: ${breakpoints.roadmap.breakpoint1}) {
    grid-template-columns: none;
    grid-template-rows: 30% 70%;
  }

  @media (max-width: ${breakpoints.roadmap.breakpoint2}) {
    padding: 2rem 3rem;
  }

  @media (max-width: ${breakpoints.roadmap.breakpoint3}) {
    padding: 1rem 3rem;
  }
  @media (max-width: ${breakpoints.roadmap.breakpoint4}) {
    padding: 1rem 1.5rem;
    margin: 2rem 0rem;
    grid-template-rows: ${props => (props.current ? '15% 85%' : '25% 75%')};
  }
  h1 {
    @media (max-width: ${breakpoints.roadmap.breakpoint4}) {
      font-size: var(--font-size-h2);
      text-align: left;
      margin-bottom: 0.5rem;
    }
  }
  p {
    @media (max-width: ${breakpoints.roadmap.breakpoint4}) {
      font-size: var(--font-size-p);
      text-align: left;
    }
  }
`;

const DescriptionWrapper = styled.div`
  text-align: left;
  padding-left: 3rem;
  padding-right: 5rem;
  h4 {
    color: var(--color-lightBlue);
    text-transform: uppercase;
  }
  @media (max-width: ${breakpoints.roadmap.breakpoint1}) {
    padding: 0;
  }
`;
const Description = styled.div`
  max-width: 650px;
  color: var(--color-lightBlue);
`;

type PhaseDetailProp = {
  title: string;
  description: string;
};

export type PhaseProp = {
  current: number;
  phase: {
    title: string;
    label: string;
    timeInformation: string;
  };
  phaseDetails: PhaseDetailProp[];
};

export type Props = {
  data: PhaseProp;
  idx?: number;
};

const Phase = ({ data, idx }: Props) => (
  <PhaseRoot current={data.current} idx={idx}>
    <div>
      <h3 className="phaseTitle">{data.phase.title}</h3>
      <SquareLabel text={data.phase.label} active={data.current}></SquareLabel>
      <p style={{ textTransform: 'uppercase', opacity: '0.6' }}>{data.phase.timeInformation}</p>
    </div>
    <DescriptionWrapper>
      {data.phaseDetails.map(detail => {
        return (
          <div style={{ marginBottom: '3rem' }} key={detail.title}>
            <h4>{detail.title}</h4>
            <Description>{detail.description}</Description>
          </div>
        );
      })}
    </DescriptionWrapper>
  </PhaseRoot>
);

export default Phase;
