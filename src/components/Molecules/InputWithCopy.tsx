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
  width?: string;
};

type ValueInputProps = {
  width: string;
};

const ValueInput = styled(FlexRowCenter)<ValueInputProps>`
  height: 40px;
  border: 1px solid var(--color-base-slate);
  opacity: 0.6;
  box-sizing: border-box;
  background-color: #000;
  ${p => (p.width ? 'width: '.concat(p.width) : '')};
`;

const ValueWrapper = styled.p`
  text-align: center;
  width: 100%;
  overflow-x: auto;
  padding: 0 0.5rem;
  font-size: var(--font-size-small-p);
`;

const Copy = styled(FlexRowCenter)`
  height: 40px;
  width: 40px;
  border-left: 1px solid var(--color-base-slate);
  padding: 0 0.5rem;
`;

const InputWithCopy = ({ textToCopy, width }: InputWithCopyProps) => (
  <ValueInput width={width}>
    <ValueWrapper>{textToCopy}</ValueWrapper>
    <Copy>
      <CopyToClipboard textToCopy={textToCopy} />
    </Copy>
  </ValueInput>
);

export default InputWithCopy;
