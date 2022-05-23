import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FlexRow, VSpacerSmall } from 'styles/common';
import Input from 'components/Atoms/Input';
import Warning from 'components/Atoms/Warning';
import { Colors } from 'components/Atoms/Button';
import SpecialButton from 'components/Atoms/SpecialButton';
import { isAddressValid, parseNumber } from 'helpers/general';
import Error from 'components/Atoms/Error';
import Overlay from 'components/Atoms/Overlay';
import { CurrencyItem } from 'components/Molecules/swap/Currency';
import PickCurrencyModal from 'components/Molecules/swap/PickerModal';
import { MAX_TKL, MIN_TKL } from 'helpers/swapConfig';
import Step from 'components/Molecules/swap/Step';
import breakpoints from 'styles/breakpoints';

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
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const WarningWrapper = styled(Warning)`
  margin: auto;
`;

type CreateSwapProps = {
  createSwapEvent: (
    depositAmount: string,
    receivingAddress: string,
    chosenCurrency: string,
    receivingAmount: number
  ) => void;
};

export default function CreateSwap({ createSwapEvent }: CreateSwapProps) {
  const [prices, setPrices] = useState({
    KMD: 0,
    BTC: 0,
    LTC: 0,
  });
  const [receivingAddress, setReceivingAddress] = useState('');
  const [receivingAmount, setReceivingAmount] = useState(1000);
  const [chosenCurrency, setChosenCurrency] = useState('KMD');
  const [depositAmount, setDepositAmount] = useState(parseNumber(MIN_TKL * prices[chosenCurrency]));
  const [addressError, setAddressError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const setSendingAmountValue = amount => setDepositAmount(parseNumber(amount));
  const minValue = () => MIN_TKL * prices[chosenCurrency];
  const maxValue = () => MAX_TKL * prices[chosenCurrency];

  const submitSwapInfo = () => {
    setAddressError('');
    if (!isAddressValid(receivingAddress)) {
      setAddressError('Invalid Address');
      return;
    }
    if (receivingAmount < MIN_TKL) {
      setSendingAmountValue(minValue());
      setAddressError(`Minimum Swap Amount ${MIN_TKL}TKL`);
      return;
    }
    if (receivingAmount > MAX_TKL) {
      setSendingAmountValue(maxValue());
      setAddressError(`Maximum Swap Amount ${MAX_TKL}TKL`);
      return;
    }
    createSwapEvent(depositAmount.toString(), receivingAddress, chosenCurrency, receivingAmount);
  };

  // get prices for the currencies
  useEffect(() => {
    // call to get prices
    console.log('Simulating setting prices');
    setPrices({
      KMD: 0.3,
      LTC: 0.0005,
      BTC: 0.0000005,
    });
    setDepositAmount(parseNumber(500 * prices[chosenCurrency]));
  }, []);

  useEffect(() => {
    setShowModal(false);
    setSendingAmountValue(minValue());
  }, [chosenCurrency]);

  useEffect(() => {
    let tkl = depositAmount / prices[chosenCurrency];
    if (tkl > MAX_TKL) {
      tkl = MAX_TKL;
      setSendingAmountValue(maxValue());
    }
    setReceivingAmount(Number(tkl.toFixed(6)));
  }, [depositAmount]);

  const checkMinAmount = () => {
    const min = minValue();
    if (depositAmount < min) {
      setSendingAmountValue(min);
    }
  };

  return (
    <div>
      <Overlay displayOverlay={showModal} />
      {showModal && <PickCurrencyModal values={prices} pickCurrency={setChosenCurrency} />}
      <BoxTitle>Create Swap</BoxTitle>
      <Step title="1. Enter amount you want to swap">
        <Currencies>
          <CurrencyItem
            title="You send"
            currencyName={chosenCurrency}
            value={depositAmount}
            onChange={val => setDepositAmount(val.target.value)}
            onClick={() => setShowModal(true)}
            onBlur={checkMinAmount}
            note={`1 ${chosenCurrency} =  ${parseNumber(1 / prices[chosenCurrency])} TKL`}
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
        <VSpacerSmall />
        <Input
          width="342px"
          value={receivingAddress}
          onChange={e => setReceivingAddress(e.target.value)}
        />
        <Error>{addressError}</Error>
      </Step>
      <SpecialButton theme={Colors.PURPLE} onClick={() => submitSwapInfo()}>
        <h5>Lets swap</h5>
      </SpecialButton>
    </div>
  );
}
