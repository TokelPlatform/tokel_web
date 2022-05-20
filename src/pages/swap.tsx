import React, { useState } from 'react';
import SwapRoot from './template';
import breakpoints from '../styles/breakpoints';
import styled from '@emotion/styled';
import PageMeta from 'components/Molecules/PageMeta';
import { PageHeader } from 'components/Atoms/Title';
import PurpleBorderBox from 'components/Atoms/PurpleBorderBox';
import CreateSwap from 'components/Organisms/swap/CreateSwap';
import FinishSwap from 'components/Organisms/swap/FinishSwap';
import SwapSuccess from 'components/Organisms/swap/Success';
import SwapFailure from 'components/Organisms/swap/Failure';
import { FlexColCenter } from 'styles/common';
import links from 'data/links';

const SwapWrapper = styled.div`
  margin: auto;
  text-align: center;
  h3 {
    margin-bottom: 0;
  }
`;

const Disclaimer = styled.p`
  font-size: var(--font-size-small-p);
  opacity: 0.5;
  margin: auto;
  margin-top: 1rem;
  text-align: left;
  padding: 1rem;
  width: 380px;
`;

const Box = styled(PurpleBorderBox)`
  max-width: 740px;
  height: 780px;
  margin: auto;
  margin-top: 2rem;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0 4rem 0;

  @media (max-width: ${breakpoints.mobilebig}) {
    flex-direction: column;
  }
`;

const CREATE = 'create';
const FINISH = 'finish';
const SUCCESS = 'success';
const ERROR = 'error';

export default function Swap() {
  const [swapAmount, setSwapAmount] = useState(100);
  const [receiveingAmount, setReceivingAmount] = useState(200);
  const [receivingAddress, setReceivingAddress] = useState('RQ2SPQedyuGnWxTfAmzNjqRTN1hd3LkSrn');
  const [chosenCurrency, setChosenCurrency] = useState('KMD');
  const [step, setStep] = useState(CREATE);

  const createSwapEvent = (swapAmount, receivingAmount, address, currency) => {
    console.log('yeps');
    setSwapAmount(swapAmount);
    setReceivingAmount(receivingAmount);
    setReceivingAddress(address);
    setChosenCurrency(currency);
    setStep(FINISH);
  };
  const goBack = () => {
    setStep(CREATE);
  };
  /* eslint-disable no-undef */
  return (
    <div>
      <PageMeta title="Swap TKL | Tokel Platform" description="" />
      <SwapRoot starsTop={'1000px'}>
        <SwapWrapper>
          <PageHeader>Swap TKL</PageHeader>
          <p>
            Simply swap your BTC, LTC and other cryptocurrencies for TKL. <br />
            Follow the guidelines below to perform a swap.
          </p>

          <Box id="swapBox">
            {step === CREATE && <CreateSwap createSwapEvent={createSwapEvent} />}
            {step === FINISH && (
              <FinishSwap
                swapAmount={swapAmount}
                receivingAmount={receiveingAmount}
                receivingAddress={receivingAddress}
                chosenCurrency={chosenCurrency}
                goBack={goBack}
              />
            )}
            {step === SUCCESS && (
              <SwapSuccess
                swapAmount={swapAmount}
                receivingAmount={receiveingAmount}
                receivingAddress={receivingAddress}
                chosenCurrency={chosenCurrency}
                newSwap={() => setStep(CREATE)}
              />
            )}
            {step === ERROR && (
              <SwapFailure
                amountFromUser={2}
                refundAmount={2}
                transactionIdFromUser={''}
                transactionIdRefund={''}
                sendingAddress={''}
                chosenCurrency={chosenCurrency}
              />
            )}
          </Box>
        </SwapWrapper>
        <FlexColCenter>
          <p style={{ maxWidth: '500px', textAlign: 'center' }}>
            Please reach out to us on <a href={links.discord}>Discord</a>, by{' '}
            <a href="mailto:contact@tokel.io">email</a> or using{' '}
            <a href={links.telegram}>Telegram</a> in case you are seeking any assistance.
          </p>
          <Disclaimer>
            <b>DISCLAIMER</b>
            <br />
            All the transactions are final and we do not issue any refunds on the performed swaps.
            Please double check all of your information.
          </Disclaimer>
        </FlexColCenter>
      </SwapRoot>
    </div>
  );
}
