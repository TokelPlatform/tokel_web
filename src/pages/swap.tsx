import React, { useEffect, useState } from 'react';
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
import { createDeposit, ExchangeStatusResult, lookupSwapApi } from 'helpers/swapApiCalls';

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
const TX_FETCH_INTERVAL_MS = 5 * 1000;

export default function Swap() {
  const [depositAmount, setDepositAmount] = useState(0);
  const [receivingAmount, setReceivingAmount] = useState(0);
  const [transactionIdSent, setTransactionIdSent] = useState(null);
  const [transactionIdReceived, setTransactionIdReceived] = useState(null);
  const [receivingAddress, setReceivingAddress] = useState(null);
  const [chosenCurrency, setChosenCurrency] = useState('KMD');
  const [exchangeId, setExchangeId] = useState(null);
  const [step, setStep] = useState(CREATE);

  const createSwapEvent = (depositAmount, address, currency, receivingAmount) => {
    console.log('Setting up for a swap creation.');
    setDepositAmount(depositAmount);
    setReceivingAddress(address);
    setReceivingAmount(receivingAmount);
    setChosenCurrency(currency);
    setStep(FINISH);
    createDeposit(chosenCurrency, receivingAddress, receivingAmount)
      .then(res => {
        setReceivingAmount(res.receivingamount);
        setExchangeId(res.exchangeid);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    if (!exchangeId) {
      return;
    }
    const txInterval = setInterval(() => {
      console.log('fetching info by exchangeid: ', exchangeId);
      lookupSwapApi(exchangeId).then((res: ExchangeStatusResult) => {
        if (res.result === 'success') {
          setTransactionIdSent(res.paymenttrx);
          setTransactionIdReceived(res.sendingtrx);
          setDepositAmount(res.depositamount);
        }
      });
    }, TX_FETCH_INTERVAL_MS);
    return () => {
      clearInterval(txInterval);
    };
  }, [exchangeId]);

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
                depositAmount={depositAmount}
                receivingAmount={receivingAmount}
                receivingAddress={receivingAddress}
                chosenCurrency={chosenCurrency}
              />
            )}
            {step === SUCCESS && (
              <SwapSuccess
                depositAmount={depositAmount}
                receivingAmount={receivingAmount}
                receivingAddress={receivingAddress}
                chosenCurrency={chosenCurrency}
                transactionIdReceived={transactionIdReceived}
                transactionIdSent={transactionIdSent}
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
