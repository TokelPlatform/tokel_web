import React, { useEffect, useState } from 'react';
import SwapRoot from './template';
import breakpoints from '../styles/breakpoints';
import styled from '@emotion/styled';
import PageMeta from 'components/Molecules/PageMeta';
// import { PageHeader } from 'components/Atoms/Title';
import PurpleBorderBox from 'components/Atoms/PurpleBorderBox';
import { FlexRow, VSpacerMedium } from 'styles/common';
import Input from 'components/Atoms/Input';
import Warning from 'components/Atoms/Warning';
import { Colors } from 'components/Atoms/Button';
import SpecialButton from 'components/Atoms/SpecialButton';
import { isAddressValid } from 'helpers/general';
import Error from 'components/Atoms/Error';
import Overlay from 'components/Atoms/Overlay';
import { CurrencyItem } from 'components/Molecules/swap/Currency';
import PickCurrencyModal from 'components/Molecules/swap/PickerModal';
import { MAX_TKL, TKLvalue } from 'helpers/swapConfig';

const SwapWrapper = styled.div`
  margin: auto;
  text-align: center;
  h3 {
    margin-bottom: 0;
  }
`;

const BoxTitle = styled.h3`
  text-transform: uppercase;
  background: var(--gradient-purple-direct);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
`;

const Box = styled(PurpleBorderBox)`
  max-width: 740px;
  margin: auto;
  margin-top: 2rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 4rem 0;

  @media (max-width: ${breakpoints.mobilebig}) {
    flex-direction: column;
  }
`;

const Step = styled.h5`
  text-transform: uppercase;
  font-weight: 700;
  margin: 0;
  margin-top: 1rem;
`;

const Currencies = styled(FlexRow)`
  align-items: flex-start;
  justify-content: center;
  column-gap: 2rem;
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

export default function Swap() {
  const [swapAmount, setSwapAmount] = useState(0);
  const [receiveingAmount, setReceivingAmount] = useState(0);
  const [receivingAddress, setReceivingAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [chosenCurrency, setChosenCurrency] = useState('KMD');
  const [showModal, setShowModal] = useState(false);
  console.log(chosenCurrency, 'chosenCurrency');

  const createSwapEvent = () => {
    setAddressError('');
    if (!isAddressValid(receivingAddress)) {
      setAddressError('Invalid Address');
    }
  };

  useEffect(() => {
    setShowModal(false);
  }, [chosenCurrency]);

  useEffect(() => {
    let tkl = swapAmount / TKLvalue[chosenCurrency];
    if (tkl > MAX_TKL) {
      tkl = MAX_TKL;
      setSwapAmount(MAX_TKL * TKLvalue[chosenCurrency]);
    }
    setReceivingAmount(tkl);
  }, [swapAmount]);

  /* eslint-disable no-undef */
  return (
    <div>
      {showModal && <PickCurrencyModal values={TKLvalue} pickCurrency={setChosenCurrency} />}
      <PageMeta title="Swap TKL | Tokel Platform" description="" />
      <Overlay displayOverlay={showModal} />
      <SwapRoot starsTop={document.documentElement.scrollHeight + 'px'}>
        <SwapWrapper>
          {/* <PageHeader>Swap TKL</PageHeader>
          <p>
            Simply swap your BTC, LTC and other cryptocurrencies for TKL. <br />
            Follow the guidelines below to perform a swap.
          </p> */}

          <Box>
            <BoxTitle>Create Swap</BoxTitle>
            <Step>1. Enter amount to swap</Step>
            <p style={{ marginTop: 0, opacity: '0.6' }}>1 KMD = 0.08 TKL</p>
            <Currencies>
              <CurrencyItem
                title="You send"
                currencyName={chosenCurrency}
                value={swapAmount}
                onChange={val => setSwapAmount(val.target.value)}
                onClick={() => setShowModal(true)}
              />
              <CurrencyItem
                title="You receive"
                currencyName="TKL"
                value={receiveingAmount}
                disabled
                note="max 50,000 TKL per swap"
              />
            </Currencies>
            <Step>2. ENTER YOUR RECEIVING TKL ADDRESS</Step>
            <WarningWrapper text="Please double check the address below. That is where you will receive your TKL" />
            <Input
              width="358px"
              value={receivingAddress}
              onChange={e => setReceivingAddress(e.target.value)}
            />
            <Error>{addressError}</Error>
            <VSpacerMedium />
            <SpecialButton theme={Colors.PURPLE} onClick={() => createSwapEvent()}>
              <h5>Lets swap</h5>
            </SpecialButton>
            <Disclaimer>
              DISCLAIMER
              <br />
              All the transactions are final and we do not issue any refunds on the performed swaps.
            </Disclaimer>
          </Box>
        </SwapWrapper>
      </SwapRoot>
    </div>
  );
}
