/* eslint-disable no-undef */
import React from 'react';
import styled from '@emotion/styled';
import Trophy from 'images/trophy.svg';
import SpecialButton from 'components/Atoms/SpecialButton';
import { Colors } from 'components/Atoms/Button';
import { InfoBlock } from 'components/Molecules/swap/InfoBlock';
import { FlexCol, FlexRow, VSpacerMedium } from 'styles/common';
import { TinyGrayLabel } from 'components/Atoms/GrayLabel';

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
  justify-content: center;
`;

type SwapSuccessProps = {
  depositAmount: number;
  receivingAmount: number;
  receivingAddress: string;
  chosenCurrency: string;
  transactionIdReceived?: string;
  transactionIdSent?: string;
  paymentTransactionUrl: string;
  sendingTransactionUrl: string;
  exchangeId: string;
  newSwap: () => void;
};

export default function SwapSuccess({
  depositAmount,
  receivingAmount,
  // transactionIdReceived,
  // transactionIdSent,
  chosenCurrency,
  paymentTransactionUrl,
  sendingTransactionUrl,
  exchangeId,
  newSwap,
}: SwapSuccessProps) {
  const url = window.location.origin.concat(window.location.pathname, '?id=', exchangeId);
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
      <TinyGrayLabel>Your swap url</TinyGrayLabel>
      <p style={{ opacity: 0.8, marginTop: 0 }}>
        <a href={url}>{url}</a>{' '}
      </p>
      <TransactionInfo>
        <FlexCol>
          <InfoBlock
            amount={receivingAmount}
            currencyName="TKL"
            header={'Received by you'}
            values={[]}
          />
          <a target="_blank" rel="noreferrer" href={sendingTransactionUrl}>
            View in Explorer
          </a>
        </FlexCol>

        <FlexCol>
          <InfoBlock
            amount={depositAmount}
            currencyName={chosenCurrency}
            header={'Sent by you'}
            values={[]}
          />
          <a target="_blank" rel="noreferrer" href={paymentTransactionUrl}>
            View in Explorer
          </a>
        </FlexCol>
      </TransactionInfo>
      <ButtonWrapper
        theme={Colors.PURPLE}
        onClick={() => {
          const params = new URLSearchParams(window.location.search);
          params.delete('id');
          window.history.pushState(null, null, window.location.pathname);
          newSwap();
        }}
      >
        <h5>Make a new swap</h5>
      </ButtonWrapper>
      <VSpacerMedium />
    </div>
  );
}
