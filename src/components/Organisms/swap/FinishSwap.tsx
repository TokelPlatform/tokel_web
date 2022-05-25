import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Warning from 'components/Atoms/Warning';
import Step from 'components/Molecules/swap/Step';
import QRCode from 'qrcode.react';
import InputWithCopy from 'components/Molecules/InputWithCopy';
import { VSpacerBig, VSpacerMedium, VSpacerSmall } from 'styles/common';
import { TinyGrayLabel } from 'components/Atoms/GrayLabel';
import ValueWithCopy from 'components/Molecules/ValueWithCopy';
import { BoxTitle } from 'components/Atoms/BoxTitle';
// import Button, { Colors } from 'components/Atoms/Button';

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
  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
  }, []);
  // eslint-disable-next-line no-undef
  let url = window.location.origin.concat(window.location.pathname, '?id=', exchangeId);
  return (
    <div>
      <BoxTitle>Finish the swap</BoxTitle>
      <div style={{ opacity: 0.8, marginTop: '0.5rem' }}>
        <TinyGrayLabel>Status </TinyGrayLabel>
        <span style={{ color: 'var(--color-base-richyellow' }}> PENDING</span>
        <VSpacerSmall />
      </div>
      <div>
        <Step
          key={'1-send'}
          title={[
            '1. Send ',
            <b style={{ color: 'var(--color-base-richyellow' }} key={depositAmount}>
              {depositAmount} {chosenCurrency}
            </b>,
            ' to the following swap address',
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
            <b style={{ color: 'var(--color-base-richyellow' }} key={receivingAmount}>
              {receivingAmount} TKL
            </b>,
          ]}
          justify="center"
        >
          <WarningWrapper text="Please double check the address below. That is where you will receive your TKL. If this address is incorrect, do not send the funds. Please click 'Go Back' and restart the swap with the correct address." />
          <VSpacerSmall />
          <InputWithCopy textToCopy={receivingAddress} />
        </Step>
        <Step
          key={'3-receive'}
          title={[`3. Save your swap url for future reference `]}
          justify="center"
        >
          <ValueWithCopy width={'100%'} cutString={false} textToCopy={url}></ValueWithCopy>
        </Step>
      </div>
      <VSpacerBig />
    </div>
  );
}
