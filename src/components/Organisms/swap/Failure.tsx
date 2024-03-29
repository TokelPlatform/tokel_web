import React from 'react';
import styled from '@emotion/styled';
import SpecialButton from 'components/Atoms/SpecialButton';
import { Colors } from 'components/Atoms/Button';
import { BoxTitle } from 'components/Atoms/BoxTitle';
import { VSpacerBig } from 'styles/common';

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
      <BoxTitle state="error">ERROR</BoxTitle>
      <VSpacerBig />
      <div>{error}</div>
      <ButtonWrapper theme={Colors.PURPLE} onClick={newSwap}>
        <h5>Make a new swap</h5>
      </ButtonWrapper>
    </div>
  );
}
