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

const Disclaimer = styled.p`
  font-size: var(--font-size-small-p);
  opacity: 0.5;
  margin-top: 1rem;
  text-align: left;
  padding: 1rem;
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
      <div style={{ marginLeft: '20%' }}>
        <Step
          title={`1. SEND ${swapAmount} ${chosenCurrency} TO THE ADDRESS BELOW`}
          justify="flex-start"
        >
          <Warning text="Make sure to send BTC only to this address" />
          <InputWithCopy textToCopy={receivingAddress} />
          <VSpacerMedium />
          <QRCodeWrapper>
            <QRCode value={receivingAddress} />
          </QRCodeWrapper>
        </Step>
        <Step
          title={`2. ONCE WE RECEIVE THE ${chosenCurrency} You will receive ${receivingAmount} TKL`}
          justify="flex-start"
        >
          <WarningWrapper text="Please double check the address below. That is where you will receive your TKL. If this address is incorrect, do not send the funds. Please click 'Go Back' and restart the swap with the correct address" />
          <InputWithCopy textToCopy={receivingAddress} />
        </Step>

        <Disclaimer>
          DISCLAIMER
          <br />
          All the transactions are final and we do not issue any refunds on the performed swaps.
        </Disclaimer>
        <p>created on 10.04.2022 at 15:04:29 </p>
      </div>
    </div>
  );
}
