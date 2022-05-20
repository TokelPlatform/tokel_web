import React, { useState } from 'react';
import SwapRoot from './template';
import breakpoints from '../styles/breakpoints';
import styled from '@emotion/styled';
import PageMeta from 'components/Molecules/PageMeta';
// import { PageHeader } from 'components/Atoms/Title';
import PurpleBorderBox from 'components/Atoms/PurpleBorderBox';
import CreateSwap from 'components/Organisms/swap/CreateSwap';
import FinishSwap from 'components/Organisms/swap/FinishSwap';
import SwapSuccess from 'components/Organisms/swap/Success';
import SwapFailure from 'components/Organisms/swap/Failure';
import { FlexColCenter } from 'styles/common';
import links from 'data/links';
import Button, { Colors } from 'components/Atoms/Button';

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
  min-width: 380px;
  max-width: 740px;
`;

const Box = styled(PurpleBorderBox)`
  max-width: 740px;
  min-height: 760px;
  margin: auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

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
    setSwapAmount(swapAmount);
    setReceivingAmount(receivingAmount);
    setReceivingAddress(address);
    setChosenCurrency(currency);
    setStep(FINISH);
  };

  return (
    <div>
      <PageMeta title="Swap TKL | Tokel Platform" description="" />
      <SwapRoot starsTop={'1000px'}>
        <SwapWrapper>
          <Box id="swapBox">
            <div style={{ marginLeft: '2rem', marginTop: '2rem' }}>
              {step === FINISH && (
                <Button
                  theme={Colors.GRAY}
                  onClick={() => setStep(CREATE)}
                  text="Go Back"
                  width="85px"
                  height="40px"
                />
              )}
            </div>
            {step === CREATE && <CreateSwap createSwapEvent={createSwapEvent} />}
            {step === FINISH && (
              <FinishSwap
                swapAmount={swapAmount}
                receivingAmount={receiveingAmount}
                receivingAddress={receivingAddress}
                chosenCurrency={chosenCurrency}
              />
            )}
            {step === SUCCESS && (
              <SwapSuccess
                swapAmount={swapAmount}
                receivingAmount={receiveingAmount}
                receivingAddress={receivingAddress}
                chosenCurrency={chosenCurrency}
                transactionIdReceived={''}
                transactionIdSent={''}
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
                newSwap={() => setStep(CREATE)}
                reason={''}
              />
            )}
            <div></div>
          </Box>
        </SwapWrapper>
        <FlexColCenter>
          <Disclaimer>
            <b>DISCLAIMER</b>
            <br />
            All the transactions are final and we do not issue any refunds on the performed swaps.
            Please double check all of your information. Reach out to us on{' '}
            <a href={links.discord}>Discord</a>, by <a href={links.mailContact}>email</a> or using{' '}
            <a href={links.telegram}>Telegram</a> in case you are seeking any assistance.
          </Disclaimer>
        </FlexColCenter>
      </SwapRoot>
    </div>
  );
}
