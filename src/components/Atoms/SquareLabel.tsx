import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

type SquareLabelProps = {
  text?: string;
  active: number;
};
const SquareLabelRoot = styled.div<SquareLabelProps>`
  background: ${props => (props.active ? 'var(--color-yellow-label)' : 'var(--color-gray)')};
  border-radius: 5px;
  padding: 8px 16px;
  height: 30px;
  /* width: 200px; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h5 {
    text-transform: uppercase;
    color: var(--color-darkestBlue);
    margin: 0;
    font-weight: 700;
  }
`;

const SquareLabel = ({ text, active }: SquareLabelProps): ReactElement => (
  <SquareLabelRoot active={active}>
    <h5>{text}</h5>
  </SquareLabelRoot>
);

export default SquareLabel;
