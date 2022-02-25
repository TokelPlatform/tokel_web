import ComparisonTable from '../Molecules/table/ComparisonTable';
import React, { useRef } from 'react';
// import breakpoints from "../../styles/breakpoints";
import styled from '@emotion/styled';
import FeatureHeader from 'components/Molecules/Features/FeatureHeader';
import { FlexColCenter } from 'styles/common';

const ComparisonRoot = styled(FlexColCenter)`
  color: white;
  margin-top: 5rem;
`;

const Comparison = () => {
  const comparisonRef = useRef();
  return (
    <ComparisonRoot ref={comparisonRef} id="compare">
      <FeatureHeader title="Inexpensive And Non-Exclusive" subtitle="Compare us with others" />
      <ComparisonTable />
    </ComparisonRoot>
  );
};

export default Comparison;
