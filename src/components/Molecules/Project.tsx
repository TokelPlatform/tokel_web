import React, { ReactElement } from 'react';

// import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';

const ProjectRoot = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  h3 {
    margin-bottom: 0.5rem;
  }
`;

type ProjectProps = {
  title: string;
  desc: string;
};

const Project = ({ title, desc }: ProjectProps): ReactElement => (
  <ProjectRoot>
    <h3>{title}</h3>
    <p>{desc}</p>
  </ProjectRoot>
);

export default Project;
