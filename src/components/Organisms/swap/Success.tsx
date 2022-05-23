import React from 'react';
import styled from '@emotion/styled';
import Trophy from 'images/trophy.svg';
import SpecialButton from 'components/Atoms/SpecialButton';
import { Colors } from 'components/Atoms/Button';
import { InfoBlock } from 'components/Molecules/swap/InfoBlock';
import { FlexRow, VSpacerMedium } from 'styles/common';

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

const TrophyWrapper = styled.div`
  margin: 2.5rem 0;
`;

const ButtonWrapper = styled(SpecialButton)`
  margin-top: 2rem;
`;
const TransactionInfo = styled(FlexRow)`
  column-gap: 2rem;
`;

type SwapSuccessProps = {
  depositAmount: number;
  receivingAmount: number;
  receivingAddress: string;
  chosenCurrency: string;
  transactionIdReceived: string;
  transactionIdSent: string;
  newSwap: () => void;
};

export default function SwapSuccess({
  depositAmount,
  receivingAmount,
  transactionIdReceived,
  transactionIdSent,
  receivingAddress,
  chosenCurrency,
  newSwap,
}: SwapSuccessProps) {
  transactionIdReceived = 'cd1cc8d91c33af4f84153529a284af6f0d69090000e4a5d58876606a838a2a87';
  transactionIdSent = 'cd1cc8d91c33af4f84153529a284af6f0d69090000e4a5d58876606a838a2a87';
  return (
    <div>
      <BoxTitle state="success">SWAP SUCCESSFUL</BoxTitle>
      <TrophyWrapper>
        <img height="120px" src={Trophy} />
        <h4 style={{ color: 'var(--color-base-richyellow)', margin: '1rem 0' }}>
          Congratulations! <br />
          You are an official holder of TKL!
        </h4>
      </TrophyWrapper>
      <TransactionInfo>
        <InfoBlock
          amount={receivingAmount}
          currencyName="TKL"
          header={'Received by you'}
          values={[
            {
              label: 'Tx id',
              value: transactionIdReceived,
            },
            {
              label: 'Address',
              value: receivingAddress,
            },
          ]}
        />
        <InfoBlock
          amount={depositAmount}
          currencyName={chosenCurrency}
          header={'Sent by you'}
          values={[
            {
              label: 'Tx id',
              value: transactionIdSent,
            },
            {
              label: 'Date received',
              value: '10.04.2022 at 15:04:29',
            },
          ]}
        />
      </TransactionInfo>
      <ButtonWrapper theme={Colors.PURPLE} onClick={newSwap}>
        <h5>Make a new swap</h5>
      </ButtonWrapper>
      <VSpacerMedium />
    </div>
  );
}
