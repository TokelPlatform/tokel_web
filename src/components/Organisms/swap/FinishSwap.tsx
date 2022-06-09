import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Warning from 'components/Atoms/Warning';
import Step from 'components/Molecules/swap/Step';
import QRCode from 'qrcode.react';
import InputWithCopy from 'components/Molecules/InputWithCopy';
import { VSpacerBig, VSpacerMedium, VSpacerSmall } from 'styles/common';
import { TinyGrayLabel } from 'components/Atoms/GrayLabel';
import { BoxTitle } from 'components/Atoms/BoxTitle';
import CopyToClipboard from 'components/Molecules/CopyToClipboard';

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
  depositAmount: string;
  depositAddress: string;
  receivingAmount: string;
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
  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
    // eslint-disable-next-line no-undef
    window.history.pushState(null, null, url);
  }, []);

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
          key={'1-receive'}
          title={[`1. Save your swap url for future reference `]}
          justify="center"
        >
          <InputWithCopy textToCopy={url}></InputWithCopy>
        </Step>
        <Step
          key={'2-send'}
          title={[
            // eslint-disable-next-line react/jsx-key
            <span key={depositAmount.concat('span')}>2. Send &nbsp;</span>,
            <b key={depositAmount} style={{ color: 'var(--color-base-richyellow' }}>
              {' '}
              {parseFloat(depositAmount.toString())} {chosenCurrency}{' '}
            </b>,
            <div key={depositAmount + '1'} style={{ marginTop: '1px' }}>
              <CopyToClipboard textToCopy={parseFloat(depositAmount.toString()).toString()} />
            </div>,
            // eslint-disable-next-line react/jsx-key
            <span key={'space'}>&nbsp;</span>,
            'to the swap address',
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
          key={'3-receive'}
          title={[
            <h5 key={receivingAmount + 'title'} style={{ margin: 0 }}>
              2. Once we receive {chosenCurrency} You will receive <br />
              <b style={{ color: 'var(--color-base-richyellow' }} key={receivingAmount}>
                {parseFloat(receivingAmount.toString())} TKL
              </b>
            </h5>,
          ]}
          justify="center"
        >
          <WarningWrapper text="Please double check the address below. That is where you will receive your TKL. If this address is incorrect, do not send the funds. Please click 'Go Back' and restart the swap with the correct address." />
          <VSpacerSmall />
          <InputWithCopy textToCopy={receivingAddress} />
        </Step>
      </div>
      <VSpacerBig />
    </div>
  );
}
