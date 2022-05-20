import styled from '@emotion/styled';
import { TinyGrayLabel } from 'components/Atoms/GrayLabel';
import React from 'react';
import { FlexCol } from 'styles/common';
import InputWithCopy from '../InputWithCopy';
// import ValueWithCopy from '../ValueWithCopy';
import { Currency } from './Currency';

type InfoBlockProps = {
  disabled?: boolean;
  currencyName?: string;
  amount: number;
  values: {
    value: string;
    label: string;
  }[];
  header: string;
};

const InfoBlockRoot = styled(FlexCol)`
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  column-gap: 2rem;
`;

const InfoPiece = styled(FlexCol)`
  align-items: flex-start;
  display: flex;
  padding: 0.5rem 0rem 0.5rem 0;
  p {
    margin: 0;
    font-size: 16px;
  }
`;

export const InfoBlock = ({ amount, currencyName, values, header }: InfoBlockProps) => (
  <InfoBlockRoot>
    <Currency disabled currencyName={currencyName} amount={amount} title={header} />
    {values.map(v => (
      <InfoPiece key={v.value}>
        <TinyGrayLabel>{v.label}</TinyGrayLabel>
        <InputWithCopy width="250px" textToCopy={v.value} />
      </InfoPiece>
    ))}
  </InfoBlockRoot>
);
