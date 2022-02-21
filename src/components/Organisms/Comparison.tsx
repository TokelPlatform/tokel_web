import ComparisonTable from '../Molecules/ComparisonTable';
import React from 'react';
// import breakpoints from "../../styles/breakpoints";
import styled from '@emotion/styled';

const ComparisonRoot = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

const Comparison = () => {
  return (
    <ComparisonRoot>
      <ComparisonTable />
    </ComparisonRoot>
  );
};

export default Comparison;
