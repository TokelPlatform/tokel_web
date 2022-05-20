import React from 'react';
import styled from '@emotion/styled';
import Warning from 'components/Atoms/Warning';
import Step from 'components/Molecules/swap/Step';
import QRCode from 'qrcode.react';
import InputWithCopy from 'components/Molecules/InputWithCopy';
import { VSpacerMedium } from 'styles/common';
import Button, { Colors } from 'components/Atoms/Button';

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
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 1rem;
`;

type FinishSwapProps = {
  swapAmount: number;
  receivingAmount: number;
  receivingAddress: string;
  chosenCurrency: string;
  goBack: () => void;
};

export default function FinishSwap({
  swapAmount,
  receivingAmount,
  receivingAddress,
  chosenCurrency,
  goBack,
}: FinishSwapProps) {
  return (
    <div>
      <Top>
        <Button
          theme={Colors.GRAY}
          onClick={() => goBack()}
          text="Go Back"
          width="85px"
          height="40px"
        />
        <BoxTitle>Finish THE Swap</BoxTitle>
      </Top>
      <p style={{ margin: 0, opacity: 0.6 }}>created on 10.04.2022 at 15:04:29 </p>
      <div>
        <Step
          title={[
            '1. Send ',
            <b key={swapAmount}>
              {swapAmount} {chosenCurrency}
            </b>,
            ' to the address below',
          ]}
          justify="center"
        >
          <Warning text="Make sure to send BTC only to this address" />
          <InputWithCopy textToCopy={receivingAddress} />
          <VSpacerMedium />
          <QRCodeWrapper>
            <QRCode value={receivingAddress} />
          </QRCodeWrapper>
        </Step>
        <Step
          title={[
            `2. Once we receive the ${chosenCurrency} You will`,
            // eslint-disable-next-line react/jsx-key
            'receive ',
            // eslint-disable-next-line react/jsx-key
            <b>{receivingAmount} TKL</b>,
          ]}
          justify="center"
        >
          <WarningWrapper text="Please double check the address below. That is where you will receive your TKL. If this address is incorrect, do not send the funds. Please click 'Go Back' and restart the swap with the correct address" />
          <InputWithCopy textToCopy={receivingAddress} />
        </Step>
      </div>
    </div>
  );
}
