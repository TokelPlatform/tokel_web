import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import React from 'react';
import breakpoints from 'styles/breakpoints';
import { FlexCol, FlexRow } from 'styles/common';

const StepTitle = styled(FlexRow)`
  text-transform: uppercase;
  font-weight: 400;
  margin: 0.5rem 0;
  text-align: left;
  font-size: 20px;
  color: var(--color-almostWhite);
  font-weight: 700;
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
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const Step = ({ justify, title, children }: StepProps) => (
  <StepRoot justify={justify}>
    <StepTitle>{title}</StepTitle>
    {children}
  </StepRoot>
);

export default Step;
