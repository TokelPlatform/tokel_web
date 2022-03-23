import React from 'react';
import breakpoints from '../../styles/breakpoints';
import futurePlans from '../../data/futurePlans';
import styled from '@emotion/styled';
import { FlexCol } from 'styles/common';

const FuturePlansRoot = styled(FlexCol)`
  align-items: center;
  padding: 5rem 0 12rem 5rem;
  @media (max-width: ${breakpoints.roadmap.breakpoint4}) {
    padding: 2rem 0 2rem 1rem;
  }
`;

const PlanWrapper = styled.div`
  max-width: 320px;
  text-align: left;
`;

const PlanContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  justify-content: space-between;
  align-content: center;
`;

const FuturePlans = () => {
  return (
    <FuturePlansRoot>
      <h2 style={{ marginBottom: '4rem' }}>Future plans</h2>
      <PlanContainer>
        {futurePlans.map((plan, idx) => (
          <PlanWrapper key={idx}>
            <h4>{plan.title}</h4>
            <p>{plan.description}</p>
          </PlanWrapper>
        ))}
      </PlanContainer>
    </FuturePlansRoot>
  );
};

export default FuturePlans;
