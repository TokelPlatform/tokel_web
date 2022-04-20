import React, { useState } from 'react';
import SwapRoot from './template';
import breakpoints from '../styles/breakpoints';
import styled from '@emotion/styled';
import PageMeta from 'components/Molecules/PageMeta';
// import { PageHeader } from 'components/Atoms/Title';
import PurpleBorderBox from 'components/Atoms/PurpleBorderBox';
import CreateSwap from 'components/Organisms/swap/CreateSwap';
import FinishSwap from 'components/Organisms/swap/FinishSwap';

const SwapWrapper = styled.div`
  margin: auto;
  text-align: center;
  h3 {
    margin-bottom: 0;
  }
`;

const Box = styled(PurpleBorderBox)`
  max-width: 740px;
  height: 850px;
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
// const SUCCESS = 'success';
// const ERROR = 'error';

export default function Swap() {
  const [swapAmount, setSwapAmount] = useState(0);
  const [receiveingAmount, setReceivingAmount] = useState(0);
  const [receivingAddress, setReceivingAddress] = useState('');
  const [chosenCurrency, setChosenCurrency] = useState('KMD');
  const [step, setStep] = useState(CREATE);
  console.log(chosenCurrency, 'chosenCurrency');

  const createSwapEvent = (swapAmount, receivingAmount, address, currency) => {
    console.log('yeps');
    setSwapAmount(swapAmount);
    setReceivingAmount(receivingAmount);
    setReceivingAddress(address);
    setChosenCurrency(currency);
    setStep(FINISH);
  };

  /* eslint-disable no-undef */
  return (
    <div>
      <PageMeta title="Swap TKL | Tokel Platform" description="" />
      <SwapRoot starsTop={'1000px'}>
        <SwapWrapper>
          {/* <PageHeader>Swap TKL</PageHeader>
          <p>
            Simply swap your BTC, LTC and other cryptocurrencies for TKL. <br />
            Follow the guidelines below to perform a swap.
          </p> */}

          <Box>
            {step === CREATE && <CreateSwap createSwapEvent={createSwapEvent} />}
            {step === FINISH && (
              <FinishSwap
                swapAmount={swapAmount}
                receivingAmount={receiveingAmount}
                receivingAddress={receivingAddress}
                chosenCurrency={chosenCurrency}
              />
            )}
          </Box>
        </SwapWrapper>
      </SwapRoot>
    </div>
  );
}
