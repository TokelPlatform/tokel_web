/**
 * Made up from components from the dapp.
 * @todo When moving swap functionality to the dapp, dapp should be adjusted to use the same component.
 * github.com/tokelPlatform/tokel_dapp/
 */

import styled from '@emotion/styled';
import React from 'react';
import { FlexRow, FlexRowCenter } from 'styles/common';
import CopyToClipboard from './CopyToClipboard';

type InputWithCopyProps = {
  textToCopy: string;
  width?: string;
  cutString?: boolean;
};

const ValueWithCopyRoot = styled(FlexRow)`
  align-items: center;
  justify-content: flex-start;
`;

type TextWrapperProps = {
  width: string;
};

const TextWrapper = styled.p<TextWrapperProps>`
  text-align: left;
  overflow-x: auto;
  font-size: var(--font-size-small-p);
  width: ${p => p.width ?? '275px'};
`;

const Copy = styled(FlexRowCenter)`
  width: 40px;
`;

const ValueWithCopy = ({ textToCopy, width, cutString }: InputWithCopyProps) => (
  <ValueWithCopyRoot>
    <TextWrapper width={width}>
      {cutString && textToCopy.length > 30 ? textToCopy.substring(0, 30) + '...' : textToCopy}
    </TextWrapper>
    <Copy>
      <CopyToClipboard textToCopy={textToCopy} />
    </Copy>
  </ValueWithCopyRoot>
);

export default ValueWithCopy;
