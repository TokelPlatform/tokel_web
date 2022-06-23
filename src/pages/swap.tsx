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

import {
  createDeposit,
  ExchangeStatusResult,
  getAllPrices,
  lookupSwapApi,
} from 'helpers/swapApiCalls';
import { exchangeIdRegex } from 'helpers/general';
import { SwapStep, TX_FETCH_INTERVAL_MS } from 'helpers/swapConfig';
import LoadingMessage from 'components/Atoms/LoadingMessage';

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
  min-width: 180px;
  max-width: 740px;
`;

const Box = styled(PurpleBorderBox)`
  max-width: 740px;
  min-height: 760px;
  margin: auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 15% 70% 15%;

  @media (max-width: ${breakpoints.mobilebig}) {
    flex-direction: column;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
`;

const BackButtonWrapper = styled.div`
  margin-left: 2rem;
  margin-top: 2rem;
  @media (max-width: ${breakpoints.mobilebig}) {
    flex-direction: column;
    margin-left: 0;
    margin-top: 0;
  }
`;

const getErrorMessage = msg => {
  switch (msg) {
    case 'exchange-timed-out':
      return [
        <div key="errtext">
          <h4>You swap has timed out</h4>
          <p>
            {' '}
            Time limit on swaps is 6 hours. It looks like you have waited too long to send us the
            coins. That is allright. Just create yourself a new swap and be mindful of the time
            limit. <br /> <br />{' '}
            <span style={{ opacity: 0.6, fontSize: '16px' }}>
              In the case you have already sent the coins and you are seeing this message, please
              reach out to us on <a href={links.discord}>Discord</a> or by{' '}
              <a href={links.mailContact}>email</a> with your transaction number and the swap url
              and we will assist you.{' '}
            </span>
          </p>
          ,
        </div>,
      ];
    case 'network-error':
      return [
        <p key="errtext">Looks like there are some network issues. Please try again later.</p>,
      ];
    default:
      return msg;
  }
};

export default function Swap() {
  const [prices, setPrices] = useState(null);
  const [depositAmount, setDepositAmount] = useState(0);
  const [depositAddress, setDepositAddress] = useState(null);
  const [receivingAmount, setReceivingAmount] = useState(0);
  const [receivingAddress, setReceivingAddress] = useState(null);
  const [chosenCurrency, setChosenCurrency] = useState('KMD');
  const [exchangeId, setExchangeId] = useState(null);
  const [paymentTransactionUrl, setPaymentTransactionUrl] = useState(null);
  const [sendingTransactionUrl, setSendingTransactionUrl] = useState(null);
  const [step, setStep] = useState(SwapStep.CREATE);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const createSwapEvent = (address, currency, receivingAmount) => {
    console.log('Setting up for a swap creation.');
    setChosenCurrency(currency);
    return createDeposit(currency, address, receivingAmount).then(res => {
      if (res.result === 'error') {
        throw new Error(res.error);
      } else {
        setReceivingAddress(address);
        setDepositAmount(res.depositamount);
        setReceivingAmount(res.receivingamount);
        setDepositAddress(res.depositaddress);
        setExchangeId(res.exchangeid);
        setStep(SwapStep.FINISH);
      }
    });
  };

  const lookup = id =>
    lookupSwapApi(id).then((res: ExchangeStatusResult) => {
      if (res.result === 'error') {
        setApiError(getErrorMessage(res.error));
        setStep(SwapStep.ERROR);
        setLoading(false);
        return;
      }
      setReceivingAddress(res.senttoaddress);
      setDepositAmount(res.depositamount);
      setReceivingAmount(res.sentamount);
      setChosenCurrency(res.depositcoin);
      setDepositAddress(res.depositaddress);
      setPaymentTransactionUrl(res.paymenttrxurl);
      setSendingTransactionUrl(res.sendingtrxurl);
      setLoading(false);

      res.result === 'success' ? setStep(SwapStep.SUCCESS) : setStep(SwapStep.FINISH);
    });

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const params = new URLSearchParams(window.location.search);
    const exchangeId = params.get('id');
    if (exchangeId && exchangeId.match(exchangeIdRegex)) {
      setLoading(true);
      setStep(null);
      lookup(exchangeId);
      setExchangeId(exchangeId);
    }
  }, []);

  // get prices for the currencies
  useEffect(() => {
    // call to get prices
    getAllPrices().then((currentPrices: any) => setPrices(currentPrices));
  }, []);

  useEffect(() => {
    let txInterval;
    if (!exchangeId) {
      txInterval && clearInterval(txInterval);
      return;
    }
    txInterval = setInterval(() => {
      console.log('fetching info by exchangeid: ', exchangeId);
      lookup(exchangeId);
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
            <BackButtonWrapper>
              {step === SwapStep.FINISH && (
                <Button
                  theme={Colors.GRAY}
                  onClick={() => {
                    setStep(SwapStep.CREATE);
                    console.log('setting it to null');
                    setExchangeId(null);
                  }}
                  text="Go Back"
                  width="85px"
                  height="40px"
                />
              )}
            </BackButtonWrapper>
            {loading && <LoadingMessage />}
            {!prices && step === SwapStep.CREATE && <LoadingMessage />}
            {prices && step === SwapStep.CREATE && (
              <CreateSwap createSwapEvent={createSwapEvent} prices={prices} />
            )}
            {step === SwapStep.FINISH && (
              <FinishSwap
                depositAmount={depositAmount}
                depositAddress={depositAddress}
                receivingAmount={receivingAmount}
                receivingAddress={receivingAddress}
                chosenCurrency={chosenCurrency}
                exchangeId={exchangeId}
                currencyPrice={prices && prices[chosenCurrency]}
              />
            )}
            {step === SwapStep.SUCCESS && (
              <SwapSuccess
                depositAmount={depositAmount}
                receivingAmount={receivingAmount}
                chosenCurrency={chosenCurrency}
                paymentTransactionUrl={paymentTransactionUrl}
                sendingTransactionUrl={sendingTransactionUrl}
                exchangeId={exchangeId}
                newSwap={() => {
                  setExchangeId(null);
                  setStep(SwapStep.CREATE);
                }}
              />
            )}
            {step === SwapStep.ERROR && (
              <SwapFailure
                error={apiError}
                newSwap={() => {
                  setApiError(null);
                  setExchangeId(null);
                  setStep(SwapStep.CREATE);
                }}
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
            <a href={links.discord}>Discord</a> or by <a href={links.mailContact}>email</a> in case
            you are seeking any assistance.
          </Disclaimer>
        </FlexColCenter>
      </SwapRoot>
    </div>
  );
}
