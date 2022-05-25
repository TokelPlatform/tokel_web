import React from 'react';
import styled from '@emotion/styled';
import Warning from 'components/Atoms/Warning';
import Step from 'components/Molecules/swap/Step';
import QRCode from 'qrcode.react';
import InputWithCopy from 'components/Molecules/InputWithCopy';
import { VSpacerMedium, VSpacerSmall } from 'styles/common';
// import Button, { Colors } from 'components/Atoms/Button';

const BoxTitle = styled.h3`
  text-transform: uppercase;
  background: var(--gradient-purple-direct);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
`;

const WarningWrapper = styled(Warning)`
  margin: auto;
`;

const QRCodeWrapper = styled.div`
  background-color: #fff;
  padding: 12px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type FinishSwapProps = {
  depositAmount: number;
  depositAddress: string;
  receivingAmount: number;
  receivingAddress: string;
  chosenCurrency: string;
  exchangeId: string;
};

export default function FinishSwap({
  depositAmount,
  depositAddress,
  receivingAmount,
  receivingAddress,
  chosenCurrency,
  exchangeId,
}: FinishSwapProps) {
  // eslint-disable-next-line no-undef
  let url = window.location.origin.concat(window.location.pathname, '?id=', exchangeId);
  return (
    <div>
      <BoxTitle>Finish the swap</BoxTitle>
      <p style={{ opacity: 0.8 }}>
        Status: PENDING
        <br />
        <a href={url}>{url}</a>{' '}
      </p>
      <div>
        <Step
          key={'1-send'}
          title={[
            '1. Send ',
            <b key={depositAmount}>
              {depositAmount} {chosenCurrency}
            </b>,
            ' to the swap address',
          ]}
          justify="center"
        >
          {/* <Warning text={`Make sure to only send ${chosenCurrency} to this address.`} /> */}
          <VSpacerSmall />
          <InputWithCopy textToCopy={depositAddress} />
          <VSpacerMedium />
          <QRCodeWrapper>
            <QRCode value={depositAddress} />
          </QRCodeWrapper>
        </Step>
        <Step
          key={'2-receive'}
          title={[
            `2. Once we receive ${chosenCurrency} You will receive `,
            // eslint-disable-next-line react/jsx-key
            <b key={receivingAmount}>{receivingAmount} TKL</b>,
          ]}
          justify="center"
        >
          <WarningWrapper text="Please double check the address below. That is where you will receive your TKL. If this address is incorrect, do not send the funds. Please click 'Go Back' and restart the swap with the correct address." />
          <VSpacerSmall />
          <InputWithCopy textToCopy={receivingAddress} />
        </Step>
      </div>
    </div>
  );
}
