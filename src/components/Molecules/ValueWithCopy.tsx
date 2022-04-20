/**
 * Made up from components from the dapp.
 * @todo When moving swap functionality to the dapp, dapp should be adjusted to use the same component.
 * github.com/tokelPlatform/tokel_dapp/
 */

import styled from '@emotion/styled';
import React from 'react';
import { FlexRowCenter } from 'styles/common';
import CopyToClipboard from './CopyToClipboard';

type InputWithCopyProps = {
  textToCopy: string;
};

const AddressInput = styled(FlexRowCenter)`
  height: 40px;
  box-sizing: border-box;
`;

const TextWrapper = styled.p`
  text-align: center;
  width: 100%;
  overflow-x: auto;
  font-size: var(--font-size-small-p);
`;

const Copy = styled(FlexRowCenter)`
  height: 40px;
  width: 40px;
  padding: 0 0.5rem;
`;

const ValueWithCopy = ({ textToCopy }: InputWithCopyProps) => (
  <AddressInput>
    <TextWrapper>{textToCopy}</TextWrapper>
    <Copy>
      <CopyToClipboard textToCopy={textToCopy} />
    </Copy>
  </AddressInput>
);

export default ValueWithCopy;
