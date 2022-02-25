import ComparisonTable from '../Molecules/table/ComparisonTable';
import React from 'react';
// import breakpoints from "../../styles/breakpoints";
import styled from '@emotion/styled';
import FeatureHeader from 'components/Molecules/Features/FeatureHeader';
import { FlexColCenter } from 'styles/common';

const ComparisonRoot = styled(FlexColCenter)`
  color: white;
  margin-top: 5rem;
`;

const Comparison = () => {
  return (
    <ComparisonRoot>
      <FeatureHeader title="Inexpensive And Non-Exclusive" subtitle="Compare us with others" />
      <ComparisonTable />
    </ComparisonRoot>
  );
};

export default Comparison;
