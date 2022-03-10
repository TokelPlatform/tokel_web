import React from 'react';
import styled from '@emotion/styled';
import FeatureHeader from 'components/Molecules/Features/FeatureHeader';
import Project from 'components/Molecules/Project';
import ecosystem from 'images/ecosystem.svg';
import data from 'data/projectData';
import { FlexColCenter } from 'styles/common';

const EcosystemRoot = styled(FlexColCenter)`
  color: var(--color-almostWhite);
  margin-top: 5rem;
  background: url(${ecosystem});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Ecosystem = () => {
  return (
    <EcosystemRoot>
      <div id="ecosystem"></div>
      <FeatureHeader title="Tokel Ecosystem" subtitle="Created on Tokel Blockchain" desc="" />
      {data.map((project, idx) => (
        <Project key={idx} logo={project.logo} title={project.title} desc={project.desc} />
      ))}
    </EcosystemRoot>
  );
};

export default Ecosystem;
