import React from 'react';
import styled from '@emotion/styled';
import { Currency } from 'components/Molecules/swap/Currency';
import { FlexCol, FlexRow } from 'styles/common';
import ValueWithCopy from 'components/Molecules/ValueWithCopy';
import GrayLabel from 'components/Atoms/GrayLabel';
import Trophy from 'images/trophy.svg';
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

const InfoBlock = styled(FlexCol)`
  justify-content: flex-start;
  align-items: flex-start;
`;

const InfoPiece = styled(FlexCol)`
  align-items: flex-start;
  display: flex;
  p {
    margin: 0;
  }
`;

type SwapSuccessProps = {
  swapAmount: number;
  receivingAmount: number;
  receivingAddress: string;
  chosenCurrency: string;
};

export default function SwapSuccess({
  swapAmount,
  receivingAmount,
  receivingAddress,
  chosenCurrency,
}: SwapSuccessProps) {
  return (
    <div>
      <BoxTitle state="success">SWAP SUCCESSFUL</BoxTitle>
      <img src={Trophy} />
      <h4 style={{ color: 'var(--color-base-richyellow)' }}>
        Congratulations! <br />
        You are an official holder of TKL!
      </h4>
      <InfoBlock>
        <p>You received</p>
        <FlexRow>
          <Currency disabled currencyName="TKL" amount={receivingAmount} />
          <FlexCol>
            <InfoPiece>
              <GrayLabel>Receiving address</GrayLabel>
              <ValueWithCopy textToCopy={receivingAddress} />
            </InfoPiece>
            <InfoPiece>
              <GrayLabel>Transaction id</GrayLabel>
              <ValueWithCopy textToCopy={'transactionid'} />
            </InfoPiece>
          </FlexCol>
        </FlexRow>
      </InfoBlock>

      <InfoBlock>
        <p>You sent</p>
        <FlexRow>
          <Currency disabled currencyName={chosenCurrency} amount={swapAmount} />
          <FlexCol>
            <InfoPiece>
              <GrayLabel>Time received</GrayLabel>
              <p>10.04.2022 at 15:04:29</p>
            </InfoPiece>
            <InfoPiece>
              <GrayLabel>Transaction id</GrayLabel>
              <ValueWithCopy textToCopy={'transactionid'} />
            </InfoPiece>
          </FlexCol>
        </FlexRow>
      </InfoBlock>
      <SpecialButton theme={Colors.PURPLE}>
        <h5>Make a new swap</h5>
      </SpecialButton>
    </div>
  );
}
