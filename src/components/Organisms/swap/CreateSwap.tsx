import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
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
import { MAX_TKL, MIN_TKL, TKLvalue } from 'helpers/swapConfig';
import Step from 'components/Molecules/swap/Step';

const BoxTitle = styled.h3`
  text-transform: uppercase;
  background: var(--gradient-purple-direct);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
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

type CreateSwapProps = {
  createSwapEvent: (
    swapAmount: number,
    receivingAmount: number,
    receivingAddress: string,
    chosenCurrency: string
  ) => void;
};

export default function CreateSwap({ createSwapEvent }: CreateSwapProps) {
  const [receivingAddress, setReceivingAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [chosenCurrency, setChosenCurrency] = useState('KMD');
  const [receivingAmount, setReceivingAmount] = useState(500);
  const [swapAmount, setSwapAmount] = useState(500 * TKLvalue[chosenCurrency]);
  const [showModal, setShowModal] = useState(false);
  console.log(chosenCurrency, 'chosenCurrency');

  const submitSwapInfo = () => {
    setAddressError('');
    if (!isAddressValid(receivingAddress)) {
      setAddressError('Invalid Address');
      return;
    }
    if (receivingAmount < MIN_TKL) {
      setSwapAmount(MIN_TKL * TKLvalue[chosenCurrency]);
      setAddressError(`Minimum Swap Amount ${MIN_TKL}TKL`);
      return;
    }
    if (receivingAmount > MAX_TKL) {
      setSwapAmount(MAX_TKL * TKLvalue[chosenCurrency]);
      setAddressError(`Maximum Swap Amount ${MAX_TKL}TKL`);
      return;
    }
    createSwapEvent(swapAmount, receivingAmount, receivingAddress, chosenCurrency);
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

  const checkMinAmount = () => {
    if (swapAmount < MIN_TKL) {
      setReceivingAmount(MIN_TKL);
      setSwapAmount(MIN_TKL * TKLvalue[chosenCurrency]);
    }
  };

  /* eslint-disable no-undef */
  return (
    <div>
      <Overlay displayOverlay={showModal} />
      {showModal && <PickCurrencyModal values={TKLvalue} pickCurrency={setChosenCurrency} />}
      <BoxTitle>Create Swap</BoxTitle>
      <Step title="1. Enter amount to swap">
        <p style={{ marginTop: 0, opacity: '0.6' }}>
          1 {chosenCurrency} = {TKLvalue[chosenCurrency]} TKL
        </p>
        <Currencies>
          <CurrencyItem
            title="You send"
            currencyName={chosenCurrency}
            value={swapAmount}
            onChange={val => setSwapAmount(val.target.value)}
            onClick={() => setShowModal(true)}
            onBlur={checkMinAmount}
          />
          <CurrencyItem
            title="You receive"
            currencyName="TKL"
            value={receivingAmount}
            disabled
            note="min 500 max 50,000 TKL"
          />
        </Currencies>
      </Step>
      <Step title="2. ENTER YOUR RECEIVING TKL ADDRESS">
        <WarningWrapper text="Please double check the address below. That is where you will receive your TKL" />
        <Input
          width="358px"
          value={receivingAddress}
          onChange={e => setReceivingAddress(e.target.value)}
        />
        <Error>{addressError}</Error>
      </Step>
      <VSpacerMedium />
      <SpecialButton theme={Colors.PURPLE} onClick={() => submitSwapInfo()}>
        <h5>Lets swap</h5>
      </SpecialButton>
      <Disclaimer>
        DISCLAIMER
        <br />
        All the transactions are final and we do not issue any refunds on the performed swaps.
      </Disclaimer>
    </div>
  );
}
