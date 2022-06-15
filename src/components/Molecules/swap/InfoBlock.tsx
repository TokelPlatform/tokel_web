import styled from '@emotion/styled';
import React from 'react';
import { FlexCol } from 'styles/common';
import { Currency } from './Currency';
// import { toSatoshi, toBitcoin } from 'satoshi-bitcoin';

type InfoBlockProps = {
  disabled?: boolean;
  currencyName?: string;
  amount: string;
  header: string;
};

const InfoBlockRoot = styled(FlexCol)`
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  column-gap: 2rem;
`;

export const InfoBlock = ({ amount, currencyName, header }: InfoBlockProps) => (
  <InfoBlockRoot>
    <Currency
      disabled
      currencyName={currencyName}
      amount={parseFloat(amount).toFixed(12)}
      title={header}
    />
  </InfoBlockRoot>
);
