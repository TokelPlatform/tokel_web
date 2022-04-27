import React from 'react';
import styled from '@emotion/styled';
import SpecialButton from 'components/Atoms/SpecialButton';
import { Colors } from 'components/Atoms/Button';
import { InfoBlock } from 'components/Molecules/swap/InfoBlock';

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

type SwapSuccessProps = {
  amountFromUser: number;
  transactionIdFromUser: string;
  sendingAddress: string;
  chosenCurrency: string;
  refundAmount: number;
  transactionIdRefund: string;
  newSwap: () => void;
  reason: string;
};

export default function SwapFailure({
  amountFromUser,
  refundAmount,
  transactionIdFromUser,
  transactionIdRefund,
  sendingAddress,
  chosenCurrency,
  newSwap,
  reason = 'REFUND',
}: SwapSuccessProps) {
  transactionIdFromUser = 'cd1cc8d91c33af4f84153529a284af6f0d69090000e4a5d58876606a838a2a87';
  transactionIdRefund = 'cd1cc8d91c33af4f84153529a284af6f0d69090000e4a5d58876606a838a2a87';
  return (
    <div>
      <BoxTitle state="error">SWAP FAILED</BoxTitle>
      {reason === 'REFUND' && (
        <h4>We have received an incorrect amount of BTC. A refund has been issued to you.</h4>
      )}
      <InfoBlock
        amount={amountFromUser}
        currencyName={chosenCurrency}
        header={'Sent by you'}
        values={[
          {
            label: 'Address',
            value: sendingAddress,
          },
          {
            label: 'Tx id',
            value: transactionIdFromUser,
          },
        ]}
      />
      <InfoBlock
        amount={refundAmount}
        currencyName={chosenCurrency}
        header={'Refund'}
        values={[
          {
            label: 'Date sent',
            value: '10.04.2022 at 15:04:29',
          },
          {
            label: 'Tx id',
            value: transactionIdRefund,
          },
        ]}
      />
      <ButtonWrapper theme={Colors.PURPLE} onClick={newSwap}>
        <h5>Make a new swap</h5>
      </ButtonWrapper>
    </div>
  );
}
