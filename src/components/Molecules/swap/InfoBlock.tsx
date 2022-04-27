import styled from '@emotion/styled';
import GrayLabel from 'components/Atoms/GrayLabel';
import React from 'react';
import { FlexCol, FlexRow } from 'styles/common';
import ValueWithCopy from '../ValueWithCopy';
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
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const InfoPiece = styled(FlexCol)`
  align-items: flex-start;
  display: flex;
  margin: 0.5rem 0 1rem 2rem;
  p {
    margin: 0;
    font-size: 16px;
  }
`;

const SectionHeader = styled.div`
  font-weight: 700;
  margin: 0;
  margin-left: 2rem;
  text-align: left;
  color: #fff;
  font-size: 16px;
`;

export const InfoBlock = ({ amount, currencyName, values, header }: InfoBlockProps) => (
  <InfoBlockRoot>
    <FlexRow>
      <Currency disabled currencyName={currencyName} amount={amount} />
      <FlexCol>
        <SectionHeader>{header}</SectionHeader>
        {values.map(v => (
          <InfoPiece key={v.value}>
            <GrayLabel>{v.label}</GrayLabel>
            <ValueWithCopy textToCopy={v.value} />
          </InfoPiece>
        ))}
      </FlexCol>
    </FlexRow>
  </InfoBlockRoot>
);
