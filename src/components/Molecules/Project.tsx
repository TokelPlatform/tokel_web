import React, { ReactElement } from 'react';

// import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';
import breakpoints from 'styles/breakpoints';

const ProjectRoot = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  h3 {
    margin-bottom: 0.5rem;
  }
  @media (max-width: ${breakpoints.mobilebig}) {
    align-items: center;
    margin-top: 1rem;
    padding: 2rem;
    justify-content: center;
  }
`;

const StyledLogo = styled.img`
  width: 30%;
  margin: auto;
`;
type ProjectProps = {
  title: string;
  desc: string;
  logo: string;
};

const Project = ({ title, desc, logo }: ProjectProps): ReactElement => (
  <ProjectRoot>
    <StyledLogo className="mobileonly" alt="project-logo" src={logo}></StyledLogo>
    <h3>{title}</h3>
    <div>{desc}</div>
  </ProjectRoot>
);

export default Project;
