import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import React from 'react';
import { FlexCol } from 'styles/common';

const StepTitle = styled.h5`
  text-transform: uppercase;
  font-weight: 400;
  margin: 1rem 0;
  text-align: left;
`;

type StepProps = {
  children?: ReactJSXElement | ReactJSXElement[];
  justify?: string;
  title?: string | ReactJSXElement[];
};

const StepRoot = styled(FlexCol)<StepProps>`
  align-items: ${p => p.justify ?? 'center'};
  justify-content: center;
  margin-top: 1.5rem;
`;

const Step = ({ justify, title, children }: StepProps) => (
  <StepRoot justify={justify}>
    <StepTitle>{title}</StepTitle>
    {children}
  </StepRoot>
);

export default Step;
