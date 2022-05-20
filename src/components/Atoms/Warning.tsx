import React from 'react';

import styled from '@emotion/styled';
import { FlexRow } from 'styles/common';
import icons from 'data/icons';

type WarningProps = {
  text: string;
};

const WarningRoot = styled(FlexRow)`
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-base-cerise);
  justify-content: flex-start;
  align-items: flex-start;
  width: 333px;
  text-align: left;
  p {
    margin: 0;
    font-size: var(--font-size-small-p);
    opacity: 0.8;
  }
  margin: 0;
`;

const Warning = ({ text }: WarningProps) => (
  <WarningRoot>
    <img src={icons.warning} style={{ marginRight: '1rem' }} />
    <p>{text}</p>
  </WarningRoot>
);

export default Warning;
