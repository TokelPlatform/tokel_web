import React from 'react';
import styled from '@emotion/styled';
import SpecialButton from 'components/Atoms/SpecialButton';
import { Colors } from 'components/Atoms/Button';

type BoxTitleProps = {
  state?: string;
};

const BoxTitle = styled.h3<BoxTitleProps>`
  text-transform: uppercase;
  background: ${p =>
    p.state === 'success'
      ? 'var(--color-tellurian)'
      : p.state === 'error'
      ? 'red'
      : 'var(--gradient-purple-direct)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled(SpecialButton)`
  margin-top: 2rem;
`;

type SwapFailureProps = {
  error: string;
  newSwap: () => void;
};

export default function SwapFailure({ error, newSwap }: SwapFailureProps) {
  return (
    <div>
      <BoxTitle state="error">SWAP FAILED</BoxTitle>
      <p>{error}</p>
      <ButtonWrapper theme={Colors.PURPLE} onClick={newSwap}>
        <h5>Make a new swap</h5>
      </ButtonWrapper>
    </div>
  );
}
